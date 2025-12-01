import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, language = 'english' } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompts: Record<string, string> = {
      english: "You are a helpful space weather assistant specializing in CME (Coronal Mass Ejection) events and their impact on infrastructure. Provide clear, technical information about solar storms, power grid impacts, satellite communications, and protective measures. Always be professional and informative.",
      hindi: "आप एक सहायक अंतरिक्ष मौसम सहायक हैं जो सीएमई (कोरोनल मास इजेक्शन) घटनाओं और बुनियादी ढांचे पर उनके प्रभाव में विशेषज्ञता रखते हैं। सौर तूफान, पावर ग्रिड प्रभाव, उपग्रह संचार और सुरक्षात्मक उपायों के बारे में स्पष्ट, तकनीकी जानकारी प्रदान करें। हमेशा पेशेवर और जानकारीपूर्ण रहें।",
      marathi: "तुम्ही एक उपयुक्त अंतराळ हवामान सहाय्यक आहात जो सीएमई (कोरोनल मास इजेक्शन) घटना आणि पायाभूत सुविधांवर त्यांचा प्रभाव यात तज्ञ आहात. सौर वादळे, वीज ग्रिड प्रभाव, उपग्रह संप्रेषण आणि संरक्षणात्मक उपायांबद्दल स्पष्ट, तांत्रिक माहिती प्रदान करा. नेहमी व्यावसायिक आणि माहितीपूर्ण रहा।",
      tamil: "நீங்கள் சிஎம்இ (கரோனல் மாஸ் எஜெக்ஷன்) நிகழ்வுகள் மற்றும் உள்கட்டமைப்பில் அவற்றின் தாக்கத்தில் நிபுணத்துவம் பெற்ற ஒரு உதவி விண்வெளி வானிலை உதவியாளர். சூரிய புயல்கள், மின் கட்டம் தாக்கங்கள், செயற்கைக்கோள் தொடர்புகள் மற்றும் பாதுகாப்பு நடவடிக்கைகள் பற்றி தெளிவான, தொழில்நுட்ப தகவல்களை வழங்கவும். எப்போதும் தொழில்முறை மற்றும் தகவல் நிறைந்ததாக இருங்கள்.",
      kannada: "ನೀವು ಸಿಎಂಇ (ಕರೋನಲ್ ಮಾಸ್ ಇಜೆಕ್ಷನ್) ಘಟನೆಗಳು ಮತ್ತು ಮೂಲಸೌಕರ್ಯದ ಮೇಲೆ ಅವುಗಳ ಪ್ರಭಾವದಲ್ಲಿ ಪರಿಣತಿ ಹೊಂದಿರುವ ಸಹಾಯಕ ಬಾಹ್ಯಾಕಾಶ ಹವಾಮಾನ ಸಹಾಯಕರು. ಸೌರ ಬಿರುಗಾಳಿಗಳು, ವಿದ್ಯುತ್ ಗ್ರಿಡ್ ಪರಿಣಾಮಗಳು, ಉಪಗ್ರಹ ಸಂವಹನಗಳು ಮತ್ತು ರಕ್ಷಣಾತ್ಮಕ ಕ್ರಮಗಳ ಬಗ್ಗೆ ಸ್ಪಷ್ಟ, ತಾಂತ್ರಿಕ ಮಾಹಿತಿಯನ್ನು ಒದಗಿಸಿ. ಯಾವಾಗಲೂ ವೃತ್ತಿಪರ ಮತ್ತು ಮಾಹಿತಿಯುಕ್ತವಾಗಿರಿ।",
      telugu: "మీరు CME (కరోనల్ మాస్ ఎజెక్షన్) సంఘటనలు మరియు మౌలిక సదుపాయాలపై వాటి ప్రభావంలో నైపుణ్యం కలిగిన సహాయక అంతరిక్ష వాతావరణ సహాయకులు. సౌర తుఫానులు, పవర్ గ్రిడ్ ప్రభావాలు, ఉపగ్రహ సమాచారాలు మరియు రక్షణ చర్యల గురించి స్పష్టమైన, సాంకేతిక సమాచారాన్ని అందించండి. ఎల్లప్పుడూ వృత్తిపరమైన మరియు సమాచారంతో ఉండండి।"
    };

    const systemPrompt = systemPrompts[language.toLowerCase()] || systemPrompts.english;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limits exceeded, please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Payment required, please add funds to your Lovable AI workspace." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
