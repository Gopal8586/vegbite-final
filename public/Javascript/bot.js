
let currentLanguage = 'en';

const responses = {
    en: {
        "hello": "Hello! My name is Shivani, How can I assist you today?",
        "hi": "Hi there! I'm Shivani, your virtual assistant for VegBites. How can I help you today?",
        "hey": "Hey! Welcome to VegBites! I'm here to help you with any questions about our vegetarian food restaurant.",
        "how are you": "I'm doing great and ready to help you! What would you like to know about VegBites?",
        "what is your name": "My name is Shivani, and I'm the virtual assistant for VegBites restaurant.",
        "who are you": "I'm Shivani, your AI assistant for VegBites - a premium vegetarian food restaurant. I can help you with menu, orders, reservations, and more!",
        
        // Menu Related
        "menu": "You can check our complete menu on our website. We offer a wide variety of delicious vegetarian dishes including appetizers, main courses, pizzas, desserts, and beverages!",
        "what do you have in menu": "Our menu features: 🍃 Appetizers (Paneer Tikka, Spring Rolls), 🍲 Soups, 🍕 Pizzas, 🍛 Main Courses, 🍰 Desserts, and 🥤 Beverages. Visit our menu page for complete details!",
        "what are your specialties": "Our specialties include Paneer Tikka Makhmali, Veg Spring Rolls, and our special pizzas. We also have daily specials that you can check on our menu page!",
        "do you have pizza": "Yes! We offer a variety of delicious vegetarian pizzas with fresh toppings and authentic flavors.",
        "do you have desserts": "Yes! We have amazing desserts like Chocolate Cake, Rasmalai, Ice Cream, and Kheer.",
        "what about beverages": "We serve Masala Chai, Cold Coffee, Fresh Lime Soda, Mango Smoothie, and traditional Buttermilk.",
        
        // Order Related
        "order": "You can place your order through our website or popular food delivery apps like Swiggy and Zomato. Simply browse our menu, select items, and checkout!",
        "how to order": "Ordering is easy! Visit our menu page, add items to cart, and proceed to checkout. You can also order through food delivery apps.",
        "how i can place order": "You can place your order through our website by adding items to cart and checking out, or through food delivery apps like Swiggy and Zomato.",
        "delivery": "Yes, we offer home delivery! You can order through our website or delivery apps. Delivery charges may apply based on your location.",
        "do you deliver": "Absolutely! We deliver to most areas in the city. Delivery time is usually 30-45 minutes.",
        "delivery time": "Our average delivery time is 30-45 minutes depending on your location and order size.",
        "delivery charges": "Delivery charges start from ₹50 and may vary based on distance from our restaurant.",
        
        // Restaurant Info
        "location": "We are located at 123 Veg Street, Green City. We're easily accessible and have parking available!",
        "where are you located": "Find us at 123 Veg Street, Green City. We're in the heart of the city with easy access!",
        "address": "Our address is 123 Veg Street, Green City. You can also find us on Google Maps for directions.",
        "contact": "You can reach us at +91-98765-43210 or email us at info@vegbites.com. We're here to help!",
        "phone number": "Our phone number is +91-98765-43210. Feel free to call us for reservations or queries!",
        "email": "You can email us at info@vegbites.com for any inquiries or feedback.",
        
        // Timing
        "time": "We are open from 10 AM to 10 PM every day, including weekends!",
        "what are your hours": "Our restaurant is open daily from 10:00 AM to 10:00 PM. We serve all meals during these hours.",
        "opening time": "We open at 10 AM every morning.",
        "closing time": "We close at 10 PM every night.",
        "are you open now": "We're open from 10 AM to 10 PM daily. Please check the current time to see if we're open!",
        "breakfast time": "We serve breakfast items from 10 AM to 12 PM.",
        "lunch time": "Lunch is served from 12 PM to 3 PM.",
        "dinner time": "Dinner is available from 7 PM to 10 PM.",
        
        // Food Quality
        "what is in food": "We offer premium quality vegetarian food and beverages made with fresh ingredients and authentic recipes!",
        "food quality": "We use only the freshest ingredients and maintain high hygiene standards. All our food is 100% vegetarian!",
        "is your food vegetarian": "Yes! We are a 100% vegetarian restaurant. All our dishes are completely vegetarian.",
        "do you use fresh ingredients": "Absolutely! We source fresh ingredients daily to ensure the best quality and taste.",
        "hygiene": "We maintain strict hygiene standards in our kitchen and follow all food safety guidelines.",
        
        // Payment
        "payment methods": "We accept cash, credit/debit cards, UPI, Google Pay, PhonePe, and net banking for your convenience.",
        "what payment options": "You can pay via cash, card, UPI, or through various digital payment apps. We also accept online payments for delivery orders.",
        "do you accept cards": "Yes, we accept all major credit and debit cards including Visa, Mastercard, and Rupay.",
        "upi payment": "Yes! We accept UPI payments through Google Pay, PhonePe, Paytm, and other UPI apps.",
        "cash on delivery": "Yes, we offer cash on delivery for all orders. You can also pay online when ordering.",
        
        // Services
        "reservation": "You can make reservations by calling us at +91-98765-43210 or through our website. We recommend booking for weekends!",
        "table booking": "Book your table by calling us or using our online reservation system. Walk-ins are also welcome!",
        "catering": "Yes, we provide catering services for parties and events! Please call us for custom menus and pricing.",
        "party orders": "We specialize in party catering! Contact us with your requirements and we'll create a special menu for your event.",
        "bulk orders": "For bulk orders and catering, please call us 24 hours in advance. We offer special discounts!",
        
        // Pricing
        "price range": "Our prices range from ₹25 for beverages to ₹350 for main courses. We offer great value for quality vegetarian food!",
        "is it expensive": "We offer affordable pricing with great value! Most main courses are between ₹150-₹350.",
        "minimum order": "There's no minimum order for dine-in. For delivery, minimum order is ₹200.",
        
        // Policies
        "what is your refund policy": "You can request a refund within 7 days of your purchase. Here is the link to our refund policy page: <a href='html/Refund.html' target='_blank' style='color: blue; text-decoration: underline;'>Refund Policy Page</a>",
        "refund policy": "Our refund policy allows returns within 7 days for valid reasons. Check our refund page for complete details.",
        "cancellation policy": "Orders can be cancelled within 5 minutes of placing. For cancellations, please call us immediately.",
        
        // Feedback
        "feedback": "We love your feedback! You can share it on our website, Google reviews, or social media pages.",
        "how to give feedback": "You can leave reviews on Google, Facebook, or email us directly at feedback@vegbites.com.",
        "complaint": "If you have any complaints, please call our manager at +91-98765-43210 or email us at support@vegbites.com.",
        
        // General
        "thank you": "You're welcome! Is there anything else I can help you with?",
        "thanks": "My pleasure! Feel free to ask if you need any other information.",
        "bye": "Goodbye! Visit us soon at VegBites for amazing vegetarian food! 🌱",
        "goodbye": "Thank you for chatting! We look forward to serving you at VegBites!",
        "help": "I can help you with: 📍 Location & Hours, 🍽️ Menu & Specialties, 🛒 Ordering & Delivery, 💳 Payment Options, 📞 Reservations, 🎉 Catering Services. What would you like to know?",
        "services": "We offer: Dine-in, Home Delivery, Online Ordering, Catering, Party Orders, and Takeaway services!",
        "about vegbites": "VegBites is a premium vegetarian restaurant serving delicious, hygienic, and affordable vegetarian food with a focus on quality and customer satisfaction.",
        
        // Emergency/Fallback
        "default": "I'm here to help! You can ask me about our menu, location, hours, delivery, reservations, or any other questions about VegBites!"
    },
    hi: {
        "नमस्ते": "नमस्ते! मेरा नाम शिवानी है, मैं आज आपकी कैसे सहायता कर सकती हूँ?",
        "नमस्कार": "नमस्कार! मैं शिवानी हूँ, वेजबाइट्स के लिए आपका वर्चुअल असिस्टेंट। मैं आपकी कैसे मदद कर सकती हूँ?",
        "हाय": "हाय! वेजबाइट्स में आपका स्वागत है! मैं आपकी शाकाहारी रेस्टोरेंट के बारे में किसी भी सवाल के जवाब देने के लिए यहाँ हूँ।",
        "आप कैसे हैं": "मैं बहुत अच्छा हूँ और मदद करने के लिए तैयार हूँ! आप वेजबाइट्स के बारे में क्या जानना चाहेंगे?",
        "आपका नाम क्या है": "मेरा नाम शिवानी है, और मैं वेजबाइट्स रेस्टोरेंट की वर्चुअल असिस्टेंट हूँ।",
        "आप कौन हैं": "मैं शिवानी हूँ, वेजबाइट्स - एक प्रीमियम शाकाहारी रेस्टोरेंट के लिए आपका AI असिस्टेंट। मैं आपको मेनू, ऑर्डर, रिजर्वेशन और बहुत कुछ में मदद कर सकती हूँ!",
        
        // मेन्यू संबंधित
        "मेन्यू": "आप हमारा पूरा मेन्यू हमारी वेबसाइट पर देख सकते हैं। हम स्वादिष्ट शाकाहारी व्यंजनों की विस्तृत विविधता प्रदान करते हैं!",
        "आपके मेन्यू में क्या है": "हमारे मेन्यू में हैं: 🍃 ऐपेटाइज़र (पनीर टिक्का, स्प्रिंग रोल), 🍲 सूप, 🍕 पिज़्ज़ा, 🍛 मुख्य व्यंजन, 🍰 डेज़र्ट, और 🥤 पेय पदार्थ।",
        "विशेष व्यंजन": "हमारे विशेष व्यंजनों में पनीर टिक्का मखमली, वेज स्प्रिंग रोल और हमारे विशेष पिज़्ज़ा शामिल हैं। हमारे मेन्यू पर दैनिक विशेष भी देखें!",
        "क्या आपके पास पिज़्ज़ा है": "हाँ! हम ताज़ा टॉपिंग और प्रामाणिक स्वाद के साथ विविध स्वादिष्ट शाकाहारी पिज़्ज़ा परोसते हैं।",
        "क्या आपके पास डेज़र्ट है": "हाँ! हमारे पास चॉकलेट केक, रसमलाई, आइस क्रीम और खीर जैसे अद्भुत डेज़र्ट हैं।",
        "पेय पदार्थ कैसे हैं": "हम मसाला चाय, कोल्ड कॉफी, फ्रेश लाइम सोडा, मैंगो स्मूदी और पारंपरिक छास परोसते हैं।",
        
        // ऑर्डर संबंधित
        "ऑर्डर": "आप हमारी वेबसाइट या लोकप्रिय फूड डिलीवरी ऐप्स के माध्यम से ऑर्डर कर सकते हैं। बस हमारा मेन्यू ब्राउज़ करें, आइटम चुनें और चेकआउट करें!",
        "ऑर्डर कैसे करें": "ऑर्डर करना आसान है! हमारे मेन्यू पेज पर जाएं, आइटम कार्ट में जोड़ें और चेकआउट पर जाएं। आप फूड डिलीवरी ऐप्स के माध्यम से भी ऑर्डर कर सकते हैं।",
        "मैं ऑर्डर कैसे प्लेस कर सकता हूँ": "आप हमारी वेबसाइट पर आइटम कार्ट में जोड़कर और चेकआउट करके ऑर्डर कर सकते हैं, या फूड डिलीवरी ऐप्स के माध्यम से।",
        "डिलीवरी": "हाँ, हम होम डिलीवरी प्रदान करते हैं! आप हमारी वेबसाइट या डिलीवरी ऐप्स से ऑर्डर कर सकते हैं। डिलीवरी शुल्क आपके स्थान के आधार पर लागू हो सकता है।",
        "क्या आप डिलीवरी करते हैं": "बिलकुल! हम शहर के अधिकांश क्षेत्रों में डिलीवरी करते हैं। डिलीवरी समय आमतौर पर 30-45 मिनट होता है।",
        "डिलीवरी समय": "हमारा औसत डिलीवरी समय आपके स्थान और ऑर्डर आकार के आधार पर 30-45 मिनट होता है।",
        "डिलीवरी शुल्क": "डिलीवरी शुल्क ₹50 से शुरू होता है और हमारे रेस्टोरेंट से दूरी के आधार पर भिन्न हो सकता है।",
        
        // रेस्टोरेंट जानकारी
        "स्थान": "हम 123 वेज स्ट्रीट, ग्रीन सिटी में स्थित हैं। हम आसानी से पहुंच योग्य हैं और पार्किंग उपलब्ध है!",
        "आप कहाँ स्थित हैं": "हमें 123 वेज स्ट्रीट, ग्रीन सिटी में पाएं। हम शहर के केंद्र में आसान पहुंच के साथ हैं!",
        "पता": "हमारा पता 123 वेज स्ट्रीट, ग्रीन सिटी है। आप दिशाओं के लिए Google Maps पर हमें भी ढूंढ सकते हैं।",
        "संपर्क": "आप हमें +91-98765-43210 पर कॉल करके या info@vegbites.com पर ईमेल करके पहुंच सकते हैं। हम यहाँ मदद के लिए हैं!",
        "फोन नंबर": "हमारा फोन नंबर +91-98765-43210 है। रिजर्वेशन या प्रश्नों के लिए हमें कॉल करने में संकोच न करें!",
        "ईमेल": "आप किसी भी पूछताछ या फीडबैक के लिए हमें info@vegbites.com पर ईमेल कर सकते हैं।",
        
        // समय
        "समय": "हम हर दिन सुबह 10 बजे से रात 10 बजे तक खुले हैं, सप्ताहांत भी!",
        "आपके घंटे क्या हैं": "हमारा रेस्टोरेंट रोजाना सुबह 10:00 बजे से रात 10:00 बजे तक खुला रहता है। हम इन घंटों के दौरान सभी भोजन परोसते हैं।",
        "खुलने का समय": "हम हर सुबह 10 बजे खुलते हैं।",
        "बंद होने का समय": "हम हर रात 10 बजे बंद होते हैं।",
        "क्या आप अभी खुले हैं": "हम रोजाना सुबह 10 बजे से रात 10 बजे तक खुले हैं। कृपया वर्तमान समय देखें कि हम खुले हैं या नहीं!",
        "नाश्ते का समय": "हम सुबह 10 बजे से दोपहर 12 बजे तक नाश्ते की वस्तुएं परोसते हैं।",
        "दोपहर के भोजन का समय": "दोपहर का भोजन दोपहर 12 बजे से शाम 3 बजे तक परोसा जाता है।",
        "रात के भोजन का समय": "रात का भोजन शाम 7 बजे से रात 10 बजे तक उपलब्ध है।",
        
        // भोजन गुणवत्ता
        "भोजन में क्या है": "हम ताज़ी सामग्री और प्रामाणिक रेसिपी से बने प्रीमियम गुणवत्ता वाले शाकाहारी भोजन और पेय पदार्थ प्रदान करते हैं!",
        "भोजन गुणवत्ता": "हम केवल ताज़ी सामग्री का उपयोग करते हैं और उच्च स्वच्छता मानकों का पालन करते हैं। हमारा सभी भोजन 100% शाकाहारी है!",
        "क्या आपका भोजन शाकाहारी है": "हाँ! हम एक 100% शाकाहारी रेस्टोरेंट हैं। हमारे सभी व्यंजन पूरी तरह से शाकाहारी हैं।",
        "क्या आप ताज़ी सामग्री का उपयोग करते हैं": "बिलकुल! हम सर्वोत्तम गुणवत्ता और स्वाद सुनिश्चित करने के लिए रोज़ ताज़ी सामग्री खरीदते हैं।",
        "स्वच्छता": "हम अपने रसोईघर में कड़ी स्वच्छता मानकों का पालन करते हैं और सभी खाद्य सुरक्षा दिशानिर्देशों का पालन करते हैं।",
        
        // भुगतान
        "भुगतान विधियां": "हम आपकी सुविधा के लिए नकद, क्रेडिट/डेबिट कार्ड, UPI, Google Pay, PhonePe, और नेट बैंकिंग स्वीकार करते हैं।",
        "भुगतान विकल्प": "आप नकद, कार्ड, UPI, या विभिन्न डिजिटल भुगतान ऐप्स के माध्यम से भुगतान कर सकते हैं। हम डिलीवरी ऑर्डर के लिए ऑनलाइन भुगतान भी स्वीकार करते हैं।",
        "क्या आप कार्ड स्वीकार करते हैं": "हाँ, हम वीज़ा, मास्टरकार्ड और रुपे सहित सभी प्रमुख क्रेडिट और डेबिट कार्ड स्वीकार करते हैं।",
        "यूपीआई भुगतान": "हाँ! हम Google Pay, PhonePe, Paytm और अन्य UPI ऐप्स के माध्यम से UPI भुगतान स्वीकार करते हैं।",
        "डिलीवरी पर नकद": "हाँ, हम सभी ऑर्डर के लिए डिलीवरी पर नकद प्रदान करते हैं। आप ऑर्डर करते समय ऑनलाइन भी भुगतान कर सकते हैं।",
        
        // सेवाएं
        "रिजर्वेशन": "आप +91-98765-43210 पर कॉल करके या हमारी वेबसाइट के माध्यम से रिजर्वेशन कर सकते हैं। हम सप्ताहांत के लिए बुकिंग की अनुशंसा करते हैं!",
        "टेबल बुकिंग": "हमें कॉल करके या हमारे ऑनलाइन रिजर्वेशन सिस्टम का उपयोग करके अपनी टेबल बुक करें। बिना बुकिंग भी आपका स्वागत है!",
        "कैटरिंग": "हाँ, हम पार्टियों और इवेंट्स के लिए कैटरिंग सेवाएं प्रदान करते हैं! कृपया कस्टम मेनू और मूल्य निर्धारण के लिए हमें कॉल करें।",
        "पार्टी ऑर्डर": "हम पार्टी कैटरिंग में विशेषज्ञता रखते हैं! अपनी आवश्यकताओं के साथ हमसे संपर्क करें और हम आपके इवेंट के लिए एक विशेष मेनू बनाएंगे।",
        "बल्क ऑर्डर": "बल्क ऑर्डर और कैटरिंग के लिए, कृपया 24 घंटे पहले हमें कॉल करें। हम विशेष छूट भी प्रदान करते हैं!",
        
        // मूल्य निर्धारण
        "मूल्य सीमा": "हमारी कीमतें पेय पदार्थों के लिए ₹25 से लेकर मुख्य व्यंजनों के लिए ₹350 तक हैं। हम गुणवत्तापूर्ण शाकाहारी भोजन के लिए बेहतर मूल्य प्रदान करते हैं!",
        "क्या यह महंगा है": "हम बेहतर मूल्य के साथ किफायती मूल्य निर्धारण प्रदान करते हैं! अधिकांश मुख्य व्यंजन ₹150-₹350 के बीच हैं।",
        "न्यूनतम ऑर्डर": "डाइन-इन के लिए कोई न्यूनतम ऑर्डर नहीं है। डिलीवरी के लिए, न्यूनतम ऑर्डर ₹200 है।",
        
        // नीतियां
        "रिफंड": "आप अपनी खरीद के 7 दिन के अंदर रिफंड के लिए अनुरोध कर सकते हैं। यहाँ हमारी रिफंड नीति पृष्ठ का लिंक है: <a href='html/Refund.html' target='_blank' style='color: blue; text-decoration: underline;'>रिफंड नीति पृष्ठ</a>",
        "रिफंड नीति": "हमारी रिफंड नीति वैध कारणों के लिए 7 दिनों के भीतर रिटर्न की अनुमति देती है। पूरी जानकारी के लिए हमारे रिफंड पृष्ठ देखें।",
        "रद्दीकरण नीति": "ऑर्डर रखने के 5 मिनट के भीतर रद्द किया जा सकता है। रद्दीकरण के लिए, कृपया तुरंत हमें कॉल करें।",
        
        // फीडबैक
        "फीडबैक": "हमें आपका फीडबैक बहुत पसंद है! आप इसे हमारी वेबसाइट, Google समीक्षाओं, या सोशल मीडिया पेजों पर साझा कर सकते हैं।",
        "फीडबैक कैसे दें": "आप Google, Facebook पर समीक्षाएं छोड़ सकते हैं या सीधे हमें feedback@vegbites.com पर ईमेल कर सकते हैं।",
        "शिकायत": "यदि आपके पास कोई शिकायत है, तो कृपया हमारे मैनेजर को +91-98765-43210 पर कॉल करें या हमें support@vegbites.com पर ईमेल करें।",
        
        // सामान्य
        "धन्यवाद": "आपका स्वागत है! क्या मैं आपकी और कोई मदद कर सकती हूँ?",
        "शुक्रिया": "मेरा आनंद हुआ! किसी और जानकारी की आवश्यकता होने पर पूछने में संकोच न करें।",
        "अलविदा": "अलविदा! जल्दी ही वेजबाइट्स पर अद्भुत शाकाहारी भोजन के लिए आएं! 🌱",
        "बाय": "बातचीत के लिए धन्यवाद! हम वेजबाइट्स पर आपकी सेवा करने की उम्मीद करते हैं!",
        "मदद": "मैं आपकी मदद कर सकती हूँ: 📍 स्थान और समय, 🍽️ मेनू और विशेषताएं, 🛒 ऑर्डर और डिलीवरी, 💳 भुगतान विकल्प, 📞 रिजर्वेशन, 🎉 कैटरिंग सेवाएं। आप क्या जानना चाहेंगे?",
        "सेवाएं": "हम प्रदान करते हैं: डाइन-इन, होम डिलीवरी, ऑनलाइन ऑर्डरिंग, कैटरिंग, पार्टी ऑर्डर, और टेकअवे सेवाएं!",
        "वेजबाइट्स के बारे में": "वेजबाइट्स एक प्रीमियम शाकाहारी रेस्टोरेंट है जो गुणवत्ता और ग्राहक संतुष्टि पर ध्यान देकर स्वादिष्ट, स्वच्छ और किफायती शाकाहारी भोजन परोसता है।",
        
        // आपातकालीन/फ़ॉलबैक
        "डिफ़ॉल्ट": "मैं यहाँ मदद करने के लिए हूँ! आप हमारे मेनू, स्थान, समय, डिलीवरी, रिजर्वेशन, या वेजबाइट्स के बारे में किसी भी अन्य प्रश्न पूछ सकते हैं!"
    },
    es: {
        "hola": "¡Hola! Mi nombre es Shivani. ¿En qué puedo ayudarle hoy?",
        "cómo estás": "¡Soy solo un bot, pero estoy aquí para ayudarte!",
        "menú": "Puedes ver nuestro menú en nuestro sitio web.",
        "hora": "Estamos abiertos de 10 AM a 10 PM.",
        "ubicación": "Estamos ubicados en 123 Veg Street, Ciudad Verde.",
        "reembolso": "Puedes solicitar un reembolso dentro de los 7 días posteriores a tu compra. Aquí está el enlace a nuestra página de política de reembolso: [Refund Policy Page Link]",
        "pedido": "Puedes hacer tu pedido a través de nuestro sitio web o aplicaciones de entrega de comida.",
        "retroalimentación": "¡Nos encanta tu retroalimentación! Puedes compartirla en nuestro sitio web o en las redes sociales.",
    }
};

const hinglishResponses = {
    "kya hai khana": "Hamare paas kai swadisht shakahari vyajan hain! Aap menu page par check kar sakte hain.",
    "kya hai menu": "Hamare menu mein kai tarah ke tasty shakahari options hain. Kripya menu page dekhein.",
    "kya hai refund policy": "Aap apne purchase ke 7 din ke andar refund ke liye request kar sakte hain. Kripya apna order number dein.",
    "aap kaise hain": "Main to ek bot hoon, lekin aap kaise hain? Kaise madad kar sakta hoon?",
    "aapka naam kya hai": "Mera naam Gopal hai, aapki madad ke liye yahaan hoon!",
    "reservation": "Aap humein 123-456-7890 par call karke ya website se reservation kar sakte hain.",
    "kya hai delivery options": "Hum delivery services bhi dete hain! Aap hamari website ya food delivery apps ke madhyam se order kar sakte hain.",
    "kya hai samay": "Hamare khane ka samay subah 10 baje se raat 10 baje tak hai.",
    "feedback": "Humein aapka feedback bahut pasand hai! Aap ise hamari website ya social media par de sakte hain.",
    "kya hai special": "Hamare paas rozana special hote hain, jo aap menu page par dekh sakte hain!",
    "kya hai bhuktan ke vikalp": "Hum nakad, card, aur UPI bhuktan accept karte hain.",
    "kya hai aapka pata": "Hum 123 Veg Street, Green City par hain.",
    "kya aap catering dete hain": "Haan, hum catering services bhi dete hain! Kripya adhik jankari ke liye humein sampark karein.",
    "kya hai order": "Aap apna order website par ya food delivery apps ke through kar sakte hain.",
    "khana": "Hamare paas bahut saare swadisht khane hain! Aap menu page par dekh sakte hain.",
    "time": "Hamare khane ka samay subah 10 baje se raat 10 baje tak hai.",
    "place": "Hum 123 Veg Street, Green City par hain.",
    "feedback": "Humein aapka feedback pasand hai! Aap ise hamari website ya social media par de sakte hain.",
    "khane me kya h": "Hamare paas bahut saare swadisht khane hain! Aap menu page par dekh sakte hain.",
    
    
};

const misspellings = {
    en: {
        "refund": ["refun","refund", "refunf", "reimbursemnt", "rebund","what is your refund policy","refund policy","money back","return policy"],
        "time": ["samy", "samae", "sama", "samaaye","timing","hours","open","close","when are you open","operating hours"],
        "location": ["lokeshan", "locashan", "lokeshan","kaha","where are you","address","place","find you","directions"],
        "food": ["foood", "fud", "fooodd", "foood","khana","what do you serve","menu items","cuisine","dishes"],
        "hello": ["helo", "hi", "helllo","hii","hey","greetings","good day","hi there"],
        "how are you": ["how r u", "hw are u", "how are ya", "howru", "kaise ho","how u doing"],
        "order": ["Order","ordr","ordeer", "how i can place order","place order","book order","make order","order food"],
        "thank you": ["thanq", "thnx", "thanx", "thanqs","thanks","thx","ty"],
        "menu": ["manu", "menue", "menuu", "men","food list","what you have","dishes available"],
        "khane me kya hai": ["khana","what in food","food items","what food","menu items"],
        "what is in food":["food","cuisine","dishes","menu"],
        "payment": ["pay","payment methods","how to pay","billing","checkout"],
        "delivery": ["deliver","home delivery","order delivery","food delivery","bring food"],
        "contact": ["phone","call","reach","email","get in touch"],
        "price": ["cost","rate","charges","fees","how much","expensive"],
        "reservation": ["book","table","reserve","booking","table booking"],
        "catering": ["party","event","bulk order","group order","special order"],
        "specialties": ["special","special dish","signature","best dish","popular"],
        "pizza": ["pizzas","pie","italian"],
        "desserts": ["sweet","sweet dish","ice cream","cake","after meal"],
        "beverages": ["drinks","cold drinks","juice","tea","coffee"],
        "vegetarian": ["veg","pure veg","no meat","plant based"],
        "hygiene": ["clean","sanitary","food safety","quality"],
        "feedback": ["review","rating","complaint","suggestion","opinion"],
        "bye": ["goodbye","see you","later","cya","exit"],
        "help": ["assist","support","guide","information","details"],
        "about": ["info","information","details","who are you","what is vegbites"],
        "services": ["facilities","features","what you offer","amenities"]
    },
    hi: {
        "रिफंड": ["रिफंड", "रिफंड्", "रिफण्ड", "रिफंडिंग", "Refund", "refund"],
        "खाना": ["खान", "कान", "खांन", "खाना",],
        "समय": ["स्मय", "समय", "समय", "समा","time"],
        "स्थान": ["स्थान", "लोकशन", "कहाँ", "ठिकाना"],
        "भोजन": ["भोजन", "फूड", "भोजन्", "फुड़","khana","khana kya hai"],
        "नमस्ते": ["नमस्ते", "नमस्ते!", "नमस्ते, ", "नमस्ते! ", "hello"],
        "आप कैसे हैं": ["आप कैसे हैं", "आप कसे हो", "आप कैसे", "कैसे हो"],
        "धन्यवाद": ["धन्यवाद", "धन्यबाद", "धन्वाद", "धन्यबाद"],
        "मेन्यू": ["मेन्यू", "मेनु", "मेन्यू ", "मेण्यू"],
    },
    es: {
        "reembolso": ["reemboso", "rembolso", "rembolsso"],
        "comida": ["comida", "fud", "cena"],
        "hora": ["hora", "horra","time"],
        "ubicación": ["ubicacion", "ubicacio"],
        "hola": ["ola", "holaa", "holla","hello"],
        "gracias": ["gracias", "graciias"],
        "menú": ["menú", "menuu","menu"], 
    }
};

function toggleChat() {
    const chatContainer = document.getElementById('chat-container');
    const chatIconText = document.getElementById('chat-icon-text');
    if (chatContainer.style.display === 'none' || chatContainer.style.display === '') {
        chatContainer.style.display = 'block';
        chatIconText.innerText = '❌';
    } else {
        chatContainer.style.display = 'none';
        chatIconText.innerText = '🤖';
    }
}

function toggleLanguageSelector() {
    const languageSelector = document.getElementById('language-selector');
    languageSelector.style.display = languageSelector.style.display === 'none' ? 'block' : 'none';
}


function changeLanguage() {
    const selectedLang = document.getElementById('language-selector').value;
    currentLanguage = selectedLang;
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML += `<div class="bot-message">Language changed to ${selectedLang === 'hi' ? 'हिन्दी' : selectedLang === 'es' ? 'Español' : 'English'}.</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;

    // Close language selector after selection
    document.getElementById('language-selector').style.display = 'none';
}

function checkEnter(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const userMessage = userInput.value.trim();
    if (userMessage) {
        displayMessage(userMessage, 'user');
        respond(userMessage);
        userInput.value = ''; 
    }
}

function respond(message) {
    const chatBox = document.getElementById('chat-box');
    let response = "";
    
    // Clean and normalize the message
    const cleanMessage = message.toLowerCase().trim();
    
    // Check for exact matches first
    if (responses[currentLanguage][cleanMessage]) {
        response = responses[currentLanguage][cleanMessage];
    } 
    // Check for misspellings
    else {
        const misspelled = Object.keys(misspellings[currentLanguage]).find(key => {
            return misspellings[currentLanguage][key].some(variant => 
                cleanMessage.includes(variant.toLowerCase())
            );
        });
        
        if (misspelled) {
            response = responses[currentLanguage][misspelled];
        } 
        // Check for partial matches and keywords
        else {
            response = findBestMatch(cleanMessage);
        }
    }
    
    // Handle refund policy link replacement
    if (response.includes("[Refund Policy Page Link]") || response.includes("[Refund Policy Page Link]")) {
        response = response.replace(
            /\[Refund Policy Page Link\]/gi,
            `<a href='html/Refund.html' target='_blank' style='color: blue; text-decoration: underline;'>Refund Policy Page</a>`
        );
    }
    
    // Add typing animation
    setTimeout(() => {
        displayMessage(response, 'bot');
    }, 500);
}

// Function to find best match based on keywords
function findBestMatch(message) {
    // Define keyword patterns
    const keywordPatterns = {
        greeting: ["hello", "hi", "hey", "नमस्ते", "हाय", "hola"],
        menu: ["menu", "food", "khana", "खाना", "भोजन", "comida", "what do you have", "what you serve"],
        order: ["order", "book", "ऑर्डर", "आर्डर", "pedido", "place order", "how to order"],
        delivery: ["delivery", "deliver", "डिलीवरी", "home delivery", "bring food"],
        location: ["location", "address", "where", "कहाँ", "स्थान", "ubicación"],
        time: ["time", "hours", "open", "close", "समय", "timing", "hora"],
        payment: ["payment", "pay", "भुगतान", "भुगतान विधि", "pago"],
        contact: ["contact", "phone", "call", "फोन", "संपर्क", "contacto"],
        price: ["price", "cost", "rate", "कीमत", "मूल्य", "precio", "expensive"],
        reservation: ["reservation", "book table", "बुकिंग", "रिजर्वेशन", "reserva"],
        catering: ["catering", "party", "event", "कैटरिंग", "पार्टी", "evento"],
        help: ["help", "assist", "support", "मदद", "सहायता", "ayuda"],
        goodbye: ["bye", "goodbye", "अलविदा", "बाय", "adiós"],
        thanks: ["thank", "thanks", "धन्यवाद", "शुक्रिया", "gracias"]
    };
    
    // Check each keyword pattern
    for (const [category, keywords] of Object.entries(keywordPatterns)) {
        if (keywords.some(keyword => message.includes(keyword))) {
            return getCategoryResponse(category);
        }
    }
    
    // Default response if no match found
    return responses[currentLanguage]["default"] || "I'm here to help! You can ask me about our menu, location, hours, delivery, reservations, or any other questions about VegBites!";
}

// Function to get response for a category
function getCategoryResponse(category) {
    const categoryResponses = {
        greeting: responses[currentLanguage]["hello"] || "Hello! How can I help you today?",
        menu: responses[currentLanguage]["menu"] || "Check our complete menu on our website!",
        order: responses[currentLanguage]["order"] || "You can order through our website or delivery apps.",
        delivery: responses[currentLanguage]["delivery"] || "Yes, we offer home delivery service!",
        location: responses[currentLanguage]["location"] || "We are located at 123 Veg Street, Green City.",
        time: responses[currentLanguage]["time"] || "We are open from 10 AM to 10 PM daily.",
        payment: responses[currentLanguage]["payment methods"] || "We accept cash, cards, UPI, and online payments.",
        contact: responses[currentLanguage]["contact"] || "Call us at +91-98765-43210 for any queries.",
        price: responses[currentLanguage]["price range"] || "Our prices range from ₹25 to ₹350.",
        reservation: responses[currentLanguage]["reservation"] || "You can make reservations by calling us.",
        catering: responses[currentLanguage]["catering"] || "We provide catering services for events!",
        help: responses[currentLanguage]["help"] || "I can help with menu, orders, location, and more!",
        goodbye: responses[currentLanguage]["bye"] || "Goodbye! Visit us again at VegBites!",
        thanks: responses[currentLanguage]["thank you"] || "You're welcome! Let me know if you need anything else."
    };
    
    return categoryResponses[category] || responses[currentLanguage]["default"];
}

function displayMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.className = sender === 'user' ? 'user-message' : 'bot-message';
    if (sender === 'bot') {
        messageDiv.innerHTML = message; 
    } else {
        messageDiv.innerText = message; 
    }
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; 
}

// Close chat when clicking outside the chat container or icon
document.addEventListener('click', function(event) {
    const chatContainer = document.getElementById('chat-container');
    const chatIcon = document.getElementById('chat-icon');
    
    // Safety check to ensure elements exist
    if (!chatContainer || !chatIcon) return;

    const isVisible = chatContainer.style.display === 'block';

    if (isVisible && 
        !chatContainer.contains(event.target) && 
        !chatIcon.contains(event.target)) {
        toggleChat();
    }
});
