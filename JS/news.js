const newsData = [
        {
          id: 1,
          category: "hospital-event", // hospital-specific outreach
          title:
            "FREE RURAL MEDICAL OUTREACH: PROVIDING ESSENTIAL HEALTH SERVICES TO UNDERSERVED COMMUNITIES",
          image: "../Images/OLCH_outreach.jpg",
          content:
            "Our hospital recently organized a free medical outreach providing checkups, laboratory screening, blood pressure monitoring, and medications to over 300 community members. The event was conducted by our qualified medical team and aimed at improving preventive healthcare awareness.",
        },
        {
          id: 2,
          category: "health-event",
          title:
            "MALARIA: STILL ONE OF THE MOST DANGEROUS PREVENTABLE DISEASES",
          image: "../Images/News-svg/doc_1.svg",
          content:
            "Malaria remains one of the most common and dangerous preventable diseases, especially in rural and underserved communities. It is caused by parasites transmitted through the bite of infected female mosquitoes. Common symptoms include fever, chills, headache, body weakness, vomiting, and loss of appetite. Children under five and pregnant women are particularly vulnerable. Prevention includes sleeping under insecticide-treated mosquito nets, draining stagnant water, clearing bushes, and seeking prompt medical testing and treatment when symptoms appear. Our hospital continues to provide malaria education, testing, treatment, and prevention support to families in the community.",
        },
        {
          id: 3,
          category: "health-event",
          title:
            "MEASLES: A HIGHLY CONTAGIOUS DISEASE THAT STILL PUTS CHILDREN AT RISK",
          image: "../Images/OLCH_outreach.jpg",
          content:
            "Measles remains a serious public health concern, particularly among children in areas with low immunization coverage. It is a highly contagious viral disease that spreads through coughing, sneezing, and close contact. Symptoms often include high fever, cough, runny nose, red eyes, and a skin rash that spreads across the body. If not properly managed, measles can lead to complications such as pneumonia, diarrhea, ear infections, malnutrition, and even death. Routine immunization remains the most effective protection. Our hospital encourages parents and caregivers to ensure children receive all recommended vaccines and to seek immediate care if symptoms are noticed.",
        },
        {
          id: 4,
          category: "health-event",
          title: "ANEMIA IN WOMEN: UNDERSTANDING IRON DEFICIENCY",
          image: "../Images/OLCH_outreach.jpg",
          content:
            "Iron deficiency anemia is one of the most common health conditions affecting women and girls, often caused by poor nutrition, menstruation, pregnancy, childbirth, or repeated illness. It occurs when the body lacks enough iron to produce healthy red blood cells needed to carry oxygen. Symptoms may include constant tiredness, dizziness, pale skin, weakness, shortness of breath, and poor concentration. If left untreated, it can affect productivity, pregnancy outcomes, and overall wellbeing. Eating iron-rich foods such as leafy vegetables, beans, eggs, fish, and meat can help, while routine health checks remain important. Our hospital promotes women’s health through awareness, screening, and nutritional guidance.",
        },
        {
          id: 5,
          category: "health-event",
          title:
            "TUBERCULOSIS SCREENING EFFORT: EARLY DETECTION CAN SAVE LIVES",
          image: "../Images/OLCH_outreach.jpg",
          content:
            "Tuberculosis, commonly known as TB, is a serious but treatable infectious disease that often affects the lungs. It spreads through the air when an infected person coughs, sneezes, or speaks. Common warning signs include a cough lasting more than two weeks, weight loss, fever, night sweats, chest pain, weakness, and loss of appetite. Early screening is essential because many people may carry the infection without realizing it until it becomes severe or spreads to others. We encourages community members to take part in TB screening efforts, seek medical attention early, and help reduce stigma through awareness and timely treatment.",
        },
        {
          id: 6,
          category: "health-event",
          title:
            "TUBERCULOSIS SCREENING EFFORT: EARLY DETECTION CAN SAVE LIVES",
          image: "../Images/OLCH_outreach.jpg",
          content:
            "Tuberculosis, commonly known as TB, is a serious but treatable infectious disease that often affects the lungs and spreads through the air when an infected person coughs, sneezes, or speaks. Common warning signs include a persistent cough lasting more than two weeks, weight loss, night sweats, fever, chest pain, weakness, and reduced appetite. Because TB can remain undetected for a long time, regular screening is one of the most effective ways to identify cases early and prevent transmission to others. We continue to encourage community members to participate in tuberculosis screening efforts, seek medical evaluation promptly, and support awareness that early diagnosis and treatment can save lives.",
        },
        {
          id: 7,
          category: "health-event",
          title: "HEPATITIS VACCINATION AND AWARENESS: PROTECTING LIVER HEALTH",
          image: "../Images/OLCH_outreach.jpg",
          content:
            "Hepatitis is an inflammation of the liver that can be caused by viral infections, unsafe medical practices, contaminated food or water, and contact with infected body fluids. Hepatitis B is especially concerning because it can lead to chronic liver disease, liver failure, or liver cancer if not prevented or treated early. Many people may carry hepatitis without obvious symptoms, making awareness and vaccination extremely important. Common signs may include tiredness, abdominal discomfort, yellowing of the eyes or skin, nausea, and loss of appetite. Vaccination remains one of the strongest forms of protection against hepatitis B. Our hospital promotes hepatitis awareness, routine testing, vaccination, and education to help families understand how to prevent infection and protect long-term liver health.",
        },
        {
          id: 8,
          category: "health-event",
          title: "DEHYDRATION PREVENTION IN CHILDREN: A LIFE-SAVING PRIORITY",
          image: "../Images/OLCH_outreach.jpg",
          content:
            "Dehydration in children can develop quickly and become dangerous if not recognized and treated early. It commonly occurs when a child loses too much fluid through diarrhea, vomiting, fever, excessive sweating, or inadequate fluid intake. Young children are especially vulnerable because their bodies lose water faster and they may not be able to communicate how they feel. Warning signs include dry lips and mouth, sunken eyes, weakness, reduced urination, unusual sleepiness, crying without tears, and refusal to eat or drink. Preventing dehydration requires ensuring that children drink enough clean fluids, especially during illness and hot weather. Oral rehydration solution can also be very helpful in replacing lost fluids. We continue to educate parents and caregivers on early signs of dehydration and the importance of prompt care to protect child health.",
        },
        {
          id: 9,
          category: "health-event",
          title: "RESPIRATORY INFECTION PREVENTION: KEEPING FAMILIES SAFE",
          image: "../Images/OLCH_outreach.jpg",
          content:
            "Respiratory infections affect the nose, throat, airways, and lungs, and they remain a common cause of illness in both children and adults. These infections can range from mild colds to more serious conditions such as pneumonia and bronchitis. They often spread through coughing, sneezing, close contact, or contaminated hands and surfaces. Symptoms may include cough, fever, sore throat, difficulty breathing, nasal congestion, chest discomfort, and general weakness. Prevention begins with simple but effective habits such as regular hand washing, proper cough etiquette, avoiding overcrowded spaces when ill, maintaining clean surroundings, and seeking medical attention early when symptoms worsen. Our hospital continues to promote respiratory infection prevention through community education, early diagnosis, and timely treatment to reduce complications and protect vulnerable individuals.",
        },
        {
          id: 10,
          category: "health-event",
          title:
            "ASTHMA MANAGEMENT AT HOME: SUPPORTING BETTER BREATHING EVERY DAY",
          image: "../Images/OLCH_outreach.jpg",
          content:
            "Asthma is a long-term condition that affects the airways and can make breathing difficult when not properly managed. It can be triggered by dust, smoke, cold air, strong odors, respiratory infections, stress, or allergens in the home environment. Common symptoms include wheezing, chest tightness, shortness of breath, and repeated coughing, especially at night or early in the morning. Good asthma management at home is essential to reducing attacks and improving quality of life. This includes avoiding known triggers, keeping living spaces clean, using prescribed medications correctly, and knowing when symptoms require urgent medical attention. Families are encouraged to understand the child’s or patient’s asthma action plan and to never ignore breathing difficulty. We supports asthma patients and caregivers through education, counseling, and ongoing clinical care.",
        },
        {
          id: 11,
          category: "health-event",
          title:
            "YELLOW FEVER IMMUNIZATION: A STRONG DEFENSE AGAINST A DEADLY VIRUS",
          image: "../Images/OLCH_outreach.jpg",
          content:
            "Yellow fever is a serious viral disease transmitted by infected mosquitoes and can cause severe illness, organ damage, and even death if not prevented. Symptoms may begin with fever, headache, body pain, weakness, nausea, and loss of appetite, while severe cases may progress to jaundice, bleeding, and complications affecting major organs. Because yellow fever can spread rapidly in vulnerable communities, immunization remains one of the most effective and reliable methods of protection. Vaccination not only protects individuals but also strengthens community immunity and reduces the risk of outbreaks. Preventive measures such as mosquito control, clean surroundings, and avoiding mosquito bites also remain important. Our hospital encourages eligible individuals to receive yellow fever immunization and stay informed about disease prevention for long-term health protection.",
        },
        {
          id: 12,
          category: "health-event",
          title:
            "SAFE DRINKING WATER TIPS: PROTECTING FAMILIES FROM WATERBORNE ILLNESS",
          image: "../Images/OLCH_outreach.jpg",
          content:
            "Access to safe drinking water is essential for good health and disease prevention. Contaminated water can expose families to serious illnesses such as diarrhea, typhoid, cholera, and intestinal infections, especially among children and older adults. To reduce health risks, drinking water should be obtained from clean sources, properly stored in covered containers, and treated when necessary through boiling, filtration, or approved purification methods. People are also encouraged to use clean cups and avoid dipping dirty hands or utensils into stored water. We continue to educate households on the importance of safe water handling because clean water remains one of the strongest foundations of a healthy community.",
        },
        {
          id: 13,
          category: "health-event",
          title: "HANDWASHING AWARENESS: A SIMPLE HABIT THAT SAVES LIVES",
          image: "../Images/OLCH_outreach.jpg",
          content:
            "Proper handwashing is one of the simplest and most effective ways to prevent the spread of infections in homes, schools, workplaces, and public spaces. Germs can easily move from unwashed hands to food, drinking water, shared surfaces, and other people. Washing hands with clean water and soap before eating, after using the toilet, after handling waste, and after caring for a sick person helps reduce the spread of diarrhea, respiratory infections, and many other preventable illnesses. Healthcare workers continue to emphasize that this small daily habit has a major impact on community health. We encourage both children and adults to practice proper hand hygiene consistently.",
        },
        {
          id: 14,
          category: "health-event",
          title: "WORM INFESTATION: WHY EARLY PREVENTION AND TREATMENT MATTER",
          image: "../Images/OLCH_outreach.jpg",
          content:
            "Worm infestation is a common health problem, particularly among children living in areas with poor sanitation and unsafe water. Intestinal worms can enter the body through contaminated food, dirty hands, unwashed fruits, unsafe water, or walking barefoot on contaminated soil. Symptoms may include stomach pain, poor appetite, weakness, weight loss, itching around the anus, vomiting, and difficulty gaining weight in children. If left untreated, worm infestation can affect nutrition, growth, and school performance. Medical professionals advise regular deworming, proper handwashing, safe toilet use, and clean food preparation as important preventive steps. Our outreach efforts continue to promote awareness and treatment for healthier child development.",
        },
        {
          id: 15,
          category: "health-event",
          title:
            "INSECT BITE CARE: KNOWING WHEN TO TREAT AND WHEN TO SEEK HELP",
          image: "../Images/OLCH_outreach.jpg",
          content:
            "Insect bites are common and are often caused by mosquitoes, ants, bees, wasps, and other insects found in homes and outdoor environments. While many bites are mild, some can cause significant swelling, pain, allergic reactions, or infections if not properly cared for. Common symptoms include redness, itching, swelling, burning sensation, or localized pain around the bite area. In some cases, more serious reactions such as difficulty breathing, dizziness, or widespread rash may require urgent medical attention. Immediate care includes cleaning the affected area, avoiding scratching, and monitoring for signs of infection or allergy. We continue to encourage families to protect children and vulnerable individuals by reducing insect exposure and seeking care when symptoms become concerning.",
        },
        {
          id: 16,
          category: "health-event",
          title: "SNAKEBITE AWARENESS: QUICK ACTION CAN SAVE A LIFE",
          image: "../Images/OLCH_outreach.jpg",
          content:
            "Snakebites remain a serious medical emergency, especially in rural and farming communities where people may come into contact with snakes in bushes, farmlands, storage areas, or flood-prone environments. A snakebite can cause pain, swelling, bleeding problems, breathing difficulty, tissue damage, and in severe cases, death if treatment is delayed. Medical experts strongly advise against harmful traditional practices such as cutting the wound, sucking the bite site, or applying dangerous substances. The safest response is to keep the person calm, limit movement, and transport them to a health facility immediately for proper care. We continue to promote community education on snakebite prevention, early recognition, and life-saving emergency response.",
        },
        {
          id: 17,
          category: "health-event",
          title:
            "FLOOD HYGIENE AND SAFETY: STAYING HEALTHY DURING AND AFTER FLOODING",
          image: "../Images/OLCH_outreach.jpg",
          content:
            "Flooding can create serious health and safety risks by contaminating water sources, damaging sanitation systems, increasing mosquito breeding, and exposing families to injuries and infections. During and after floods, communities may face a higher risk of diarrhea, skin infections, malaria, respiratory illness, and food contamination. Health professionals advise residents to avoid walking through unsafe floodwater, boil or purify drinking water, keep food covered, wash hands regularly, and seek care for any unusual symptoms or injuries. Children should be closely supervised, and any wounds should be cleaned quickly to reduce infection. We continue to support community awareness on flood hygiene and practical safety measures that protect lives and wellbeing.",
        },
        {
          id: 18,
          category: "health-event",
          title:
            "SUN SAFETY AND HEAT STROKE: PROTECTING THE BODY FROM EXTREME HEAT",
          image: "../Images/OLCH_outreach.jpg",
          content:
            "Prolonged exposure to intense heat can lead to dehydration, exhaustion, and heat stroke, especially among children, older adults, outdoor workers, and individuals with underlying health conditions. Heat stroke is a serious emergency that may cause confusion, fainting, rapid heartbeat, high body temperature, or loss of consciousness if not addressed quickly. To stay safe, people are encouraged to drink enough clean water, avoid unnecessary exposure to harsh afternoon sun, wear light clothing, rest in cool spaces, and pay close attention to early signs of overheating. Medical professionals continue to remind families that hot weather should never be underestimated. We encourage prompt action whenever symptoms of heat-related illness are noticed.",
        },
        {
          id: 19,
          category: "health-event",
          title: "BURN TREATMENT AWARENESS: EARLY CARE REDUCES COMPLICATIONS",
          image: "../Images/OLCH_outreach.jpg",
          content:
            "Burn injuries can happen at home, in the kitchen, during electrical accidents, or through exposure to hot liquids, flames, chemicals, or heated surfaces. Even minor burns can become serious if they are not treated properly or become infected. Immediate first aid should include cooling the affected area with clean running water and avoiding harmful practices such as applying oil, toothpaste, raw substances, or unclean materials. Signs that require urgent medical attention include large burns, severe pain, blisters, burns on the face or genitals, or difficulty breathing after smoke or heat exposure. We continue to educate families on safe home practices and the importance of early medical treatment for burn injuries.",
        },
        {
          id: 20,
          category: "health-event",
          title:
            "WOUND AND ULCER CARE: PREVENTING INFECTION AND PROMOTING HEALING",
          image: "../Images/OLCH_outreach.jpg",
          content:
            "Proper wound and ulcer care is important in preventing infection, reducing pain, and supporting healthy healing. Cuts, sores, pressure wounds, and chronic ulcers can worsen quickly when they are neglected, poorly cleaned, or exposed to unsafe conditions. Warning signs of infection may include swelling, redness, pus, foul smell, increasing pain, or delayed healing. People living with diabetes, poor circulation, or long-standing skin wounds should be especially cautious and seek professional care early. Healthcare providers continue to emphasize the importance of clean dressing changes, proper hygiene, and regular wound assessment. We encourage families not to ignore wounds that persist or show signs of worsening.",
        },
        {
          id: 21,
          category: "health-event",
          title:
            "COMMON CHILDHOOD ILLNESSES: EARLY RECOGNITION HELPS PROTECT CHILDREN",
          image: "../Images/OLCH_outreach.jpg",
          content:
            "Children commonly experience illnesses such as fever, cough, diarrhea, vomiting, malaria, skin infections, and respiratory conditions, many of which can become serious if ignored. Because children’s bodies can weaken quickly during illness, parents and caregivers should pay close attention to warning signs such as refusal to eat, difficulty breathing, persistent fever, unusual sleepiness, repeated vomiting, or signs of dehydration. Early medical attention can help prevent complications and improve recovery. Our healthcare team continues to educate families on recognizing symptoms early, maintaining hygiene, ensuring adequate fluids, and seeking timely care when a child appears unwell.",
        },
        {
          id: 22,
          category: "health-event",
          title: "CHILDHOOD OBESITY PREVENTION: BUILDING HEALTHY HABITS EARLY",
          image: "../Images/OLCH_outreach.jpg",
          content:
            "Childhood obesity is becoming an increasing health concern and can affect a child’s physical health, confidence, movement, and long-term wellbeing. It often develops gradually through unhealthy eating habits, frequent sugary snacks and drinks, reduced physical activity, and too much sedentary screen time. Children who carry excess weight may face a greater risk of high blood pressure, poor sleep, joint discomfort, and future health complications. Prevention begins with healthy family routines such as balanced meals, active play, reduced junk food intake, and positive lifestyle habits at home. We continue to encourage parents and caregivers to support children in growing strong, active, and healthy without relying on harmful food patterns.",
        },
        {
          id: 23,
          category: "health-event",
          title:
            "CHILD GROWTH MONITORING: TRACKING HEALTHY DEVELOPMENT MATTERS",
          image: "../Images/OLCH_outreach.jpg",
          content:
            "Regular child growth monitoring helps healthcare providers and caregivers understand whether a child is growing and developing well for their age. Monitoring weight, height, feeding patterns, and developmental progress can help identify early signs of poor nutrition, illness, delayed growth, or other concerns before they become more serious. It also gives parents the opportunity to ask questions and receive guidance on feeding, hygiene, immunization, and overall child wellbeing. Medical professionals continue to stress that growth checks are not only for sick children but are an important part of preventive care. We encourage caregivers to take advantage of routine growth monitoring services for healthy childhood development.",
        },
        {
          id: 24,
          category: "health-event",
          title:
            "NUTRITION FOR TODDLERS: SUPPORTING STRONG GROWTH AND DEVELOPMENT",
          image: "../Images/OLCH_outreach.jpg",
          content:
            "Toddlers need balanced nutrition to support healthy growth, brain development, strong immunity, and active learning. At this stage, children require a variety of foods including grains, fruits, vegetables, protein sources, and healthy fats to help meet their daily nutritional needs. Poor feeding practices, excessive sugary snacks, or limited food variety can contribute to weakness, poor weight gain, frequent illness, and developmental concerns. Parents and caregivers are encouraged to provide regular meals, nutritious snacks, clean drinking water, and age-appropriate portions. Our team continues to promote practical nutrition guidance that helps families raise healthy and energetic children.",
        },
        {
          id: 25,
          category: "health-event",
          title:
            "POSTNATAL CARE GUIDANCE: SUPPORTING MOTHERS AND NEWBORNS AFTER DELIVERY",
          image: "../Images/OLCH_outreach.jpg",
          content:
            "The period after childbirth is a critical time for both mother and baby, yet many families underestimate the importance of postnatal care. During this stage, mothers may face bleeding, infection, weakness, breast complications, emotional stress, or delayed recovery if proper support is not provided. Newborns also require close monitoring for feeding difficulties, jaundice, infection, and healthy adjustment after birth. Postnatal care helps identify problems early, supports breastfeeding, promotes safe newborn care, and strengthens maternal recovery. Healthcare providers continue to encourage mothers and caregivers to attend postnatal check-ups and seek help promptly whenever concerns arise after delivery.",
        },
        {
          id: 26,
          category: "health-event",
          title:
            "SAFE DELIVERY PRACTICES: PROTECTING MOTHERS AND BABIES DURING CHILDBIRTH",
          image: "../Images/OLCH_outreach.jpg",
          content:
            "Safe delivery practices play a vital role in reducing preventable complications during childbirth and improving outcomes for both mother and baby. Giving birth in a clean environment with skilled health support helps reduce the risk of severe bleeding, infection, birth injury, delayed emergency care, and newborn distress. Expectant mothers are encouraged to prepare early, attend antenatal visits, know their expected delivery plan, and seek professional care when labor begins. Medical professionals continue to emphasize that every birth deserves safe conditions, careful monitoring, and timely intervention when needed. We remain committed to promoting childbirth safety through education and maternal support services.",
        },
        {
          id: 27,
          category: "health-event",
          title:
            "PREGNANCY CHECK-UP IMPORTANCE: WHY ANTENATAL CARE SHOULD NEVER BE MISSED",
          image: "../Images/OLCH_outreach.jpg",
          content:
            "Regular pregnancy check-ups are essential for monitoring the health of both mother and unborn baby throughout pregnancy. Antenatal care helps detect and manage conditions such as high blood pressure, anemia, infections, poor fetal growth, and other complications before they become dangerous. It also gives mothers the opportunity to receive important guidance on nutrition, medications, safe delivery planning, and warning signs that require urgent attention. Skipping antenatal visits can increase the risk of preventable problems during pregnancy and childbirth. Our healthcare team continues to encourage every pregnant woman to attend scheduled check-ups and stay actively involved in her maternal care journey.",
        },
        {
          id: 28,
          category: "health-event",
          title:
            "MATERNAL NUTRITION ADVICE: EATING WELL FOR A HEALTHIER PREGNANCY",
          image: "../Images/OLCH_outreach.jpg",
          content:
            "Good nutrition during pregnancy is essential for the health of both mother and baby. A pregnant woman’s body needs enough energy, iron, protein, vitamins, and other nutrients to support fetal development, maintain strength, and reduce the risk of complications such as anemia, weakness, and poor birth outcomes. Eating a balanced variety of foods such as vegetables, fruits, beans, eggs, fish, grains, and iron-rich meals can make a meaningful difference throughout pregnancy. Medical professionals also advise pregnant women to stay hydrated, follow prescribed supplements, and avoid harmful substances. We continue to provide maternal nutrition guidance to help mothers build healthier pregnancies and stronger newborn outcomes.",
        },
        {
          id: 29,
          category: "health-event",
          title:
            "TEEN HEALTH EDUCATION: HELPING YOUNG PEOPLE BUILD HEALTHY FUTURES",
          image: "../Images/OLCH_outreach.jpg",
          content:
            "Teen health education is an important part of helping adolescents grow into healthy, informed, and responsible adults. During the teenage years, young people experience major physical, emotional, and social changes that can influence their long-term wellbeing. Health education helps teens understand personal hygiene, nutrition, emotional wellbeing, healthy habits, disease prevention, and the importance of making safe life choices. It also encourages confidence, self-awareness, and early help-seeking when challenges arise. Our outreach and awareness programs continue to support adolescents with practical health knowledge that prepares them for stronger and healthier futures.",
        },
        {
          id: 30,
          category: "health-event",
          title:
            "ROUTINE CHILD IMMUNIZATION: A STRONG SHIELD AGAINST PREVENTABLE DISEASES",
          image: "../Images/OLCH_outreach.jpg",
          content:
            "Routine child immunization remains one of the most effective ways to protect children from dangerous but preventable diseases such as measles, polio, tuberculosis, hepatitis B, and other serious infections. Vaccines help strengthen a child’s immune system and reduce the risk of illness, disability, and death. Delaying or missing scheduled immunizations can leave children vulnerable during the most critical stages of growth. Healthcare providers continue to encourage parents and caregivers to keep up with vaccination schedules and maintain proper child health records. We remain committed to promoting immunization awareness as a key part of building healthier families and safer communities.",
        },
        {
          id: 31,
          category: "health-event",
          title:
            "EXCLUSIVE BREASTFEEDING SUPPORT: GIVING BABIES A HEALTHY START",
          image: "../Images/OLCH_outreach.jpg",
          content:
            "Exclusive breastfeeding during the first six months of life provides babies with the ideal nutrition they need for healthy growth, strong immunity, and early development. Breast milk contains essential nutrients and natural protection that help reduce the risk of infections, diarrhea, and poor weight gain. It also supports bonding between mother and child and offers important health benefits for the mother as well. Some mothers may face challenges such as poor latch, low confidence, or concerns about milk supply, which is why guidance and support are so important. We continue to encourage and support mothers through breastfeeding education, counseling, and practical care after delivery.",
        },
        {
          id: 32,
          category: "health-event",
          title:
            "FOOD SAFETY AND STORAGE: PREVENTING ILLNESS THROUGH SMART KITCHEN PRACTICES",
          image: "../Images/OLCH_outreach.jpg",
          content:
            "Food safety and proper storage are essential for preventing foodborne illness and protecting family health. Contaminated or poorly stored food can lead to stomach infections, diarrhea, vomiting, and serious health complications, especially in children and older adults. Important safety practices include washing hands before food preparation, cooking food thoroughly, keeping raw and cooked foods separate, storing leftovers safely, and covering food properly to prevent contamination by insects, dust, or dirty surfaces. Medical professionals continue to stress that healthy eating also depends on safe food handling. We encourage households to make food hygiene a regular part of daily life.",
        },
        {
          id: 33,
          category: "health-event",
          title: "TOILET HYGIENE IMPORTANCE: A KEY STEP IN DISEASE PREVENTION",
          image: "../Images/OLCH_outreach.jpg",
          content:
            "Good toilet hygiene is a critical part of maintaining public health and preventing the spread of infection within homes, schools, and communities. Poor toilet use and unclean sanitation facilities can contribute to diarrhea, worm infestation, typhoid, and other hygiene-related diseases. Important habits include flushing or cleaning toilets properly, washing hands with soap after use, keeping toilet areas dry and clean, and teaching children safe toilet practices from an early age. Communities are also encouraged to ensure that toilets are used correctly and not replaced with unsafe open defecation practices. Our health education efforts continue to highlight toilet hygiene as a simple but powerful way to protect everyday health.",
        },
        {
          id: 34,
          category: "health-event",
          title: "ADOLESCENT MENTAL HEALTH: SUPPORTING EMOTIONAL WELLBEING",
          image: "../Images/OLCH_outreach.jpg",
          content:
            "Adolescence is a critical period of emotional, social, and cognitive growth. Mental health challenges such as anxiety, depression, and stress can affect academic performance, relationships, and overall wellbeing. Recognizing early signs, providing emotional support, and creating safe spaces for communication are key steps for parents, caregivers, and educators. We encourage open discussions, access to counseling services, and early intervention to help teens navigate challenges and develop resilience for a healthier transition into adulthood.",
        },
        {
          id: 35,
          category: "health-event",
          title: "SUBSTANCE ABUSE AWARENESS: PROTECTING YOUNG MINDS AND BODIES",
          image: "../Images/OLCH_outreach.jpg",
          content:
            "Substance abuse, including alcohol, tobacco, and recreational drugs, poses significant risks to physical and mental health, especially among adolescents and young adults. It can lead to addiction, impaired judgment, weakened immunity, and long-term organ damage. Preventive education, early recognition of risky behaviors, supportive family engagement, and access to counseling services are vital in mitigating these risks. Healthcare providers emphasize awareness campaigns, guidance on coping strategies, and community support to help individuals make healthy lifestyle choices and avoid harmful substances.",
        },
        {
          id: 36,
          category: "health-event",
          title:
            "SEXUALLY TRANSMITTED INFECTION PREVENTION: PROMOTING SAFE PRACTICES",
          image: "../Images/OLCH_outreach.jpg",
          content:
            "Sexually transmitted infections (STIs) are preventable yet remain a common health concern among adolescents and adults. Common STIs include chlamydia, gonorrhea, syphilis, and HIV/AIDS. Prevention strategies include practicing safe sexual behaviors, consistent use of condoms, routine medical testing, vaccination where available (e.g., HPV), and open communication with partners. Our medical team encourages education, early diagnosis, and seeking timely treatment to prevent complications such as infertility, chronic infections, and long-term health challenges.",
        },
        {
          id: 37,
          category: "health-event",
          title: "CERVICAL CANCER SCREENING: EARLY DETECTION SAVES LIVES",
          image: "../Images/OLCH_outreach.jpg",
          content:
            "Cervical cancer is a preventable yet potentially deadly disease often caused by persistent infection with the human papillomavirus (HPV). Regular screening through Pap smears or HPV testing allows for early detection and treatment of precancerous changes. Vaccination against HPV, safe sexual practices, and routine check-ups significantly reduce the risk of developing cervical cancer. We continue to educate women on the importance of timely screening, awareness of early warning signs, and access to preventive care to ensure healthier outcomes.",
        },
        {
          id: 38,
          category: "health-event",
          title: "STROKE PREVENTION TIPS: REDUCING RISKS FOR A HEALTHY LIFE",
          image: "../Images/OLCH_outreach.jpg",
          content:
            "Stroke is a medical emergency that occurs when blood flow to the brain is interrupted, potentially causing permanent disability or death. Risk factors include high blood pressure, diabetes, smoking, high cholesterol, obesity, and sedentary lifestyles. Preventive measures include regular blood pressure and cholesterol checks, a balanced diet, physical activity, stress management, and avoiding tobacco or excessive alcohol. Our healthcare providers continue to raise awareness about stroke prevention and encourage proactive lifestyle choices to reduce the likelihood of stroke and improve long-term health outcomes.",
        },
        {
          id: 39,
          category: "health-event",
          title: "HEART DISEASE AWARENESS: KEEPING THE HEART STRONG",
          image: "../Images/OLCH_outreach.jpg",
          content:
            "Heart disease remains one of the leading causes of illness and death worldwide. Risk factors include high blood pressure, diabetes, smoking, unhealthy diet, physical inactivity, and stress. Early recognition of warning signs such as chest pain, shortness of breath, palpitations, or unusual fatigue is critical. Preventive strategies include maintaining a balanced diet, regular exercise, avoiding smoking, stress reduction, and routine medical check-ups. We encourage individuals and families to take heart health seriously by adopting these lifestyle measures and seeking timely medical care when symptoms arise.",
        },
        {
          id: 40,
          category: "health-event",
          title: "DIABETES MANAGEMENT: LIVING WELL WITH BLOOD SUGAR CONDITIONS",
          image: "../Images/OLCH_outreach.jpg",
          content:
            "Diabetes is a chronic condition that affects how the body processes blood sugar, leading to potential complications such as vision loss, kidney disease, nerve damage, and cardiovascular issues. Proper management involves monitoring blood glucose, following a balanced diet, engaging in regular physical activity, adhering to medications or insulin therapy, and attending routine medical appointments. Our team of healthcare providers emphasizes education, self-care strategies, and ongoing support to help individuals manage diabetes effectively and reduce long-term complications.",
        },
        {
          id: 41,
          category: "health-event",
          title: "HYPERTENSION CONTROL: KEEPING BLOOD PRESSURE IN CHECK",
          image: "../Images/OLCH_outreach.jpg",
          content:
            "Hypertension, or high blood pressure, is a silent condition that increases the risk of heart disease, stroke, kidney failure, and other complications if uncontrolled. Lifestyle modifications such as a low-salt diet, regular exercise, stress reduction, avoiding tobacco, and limiting alcohol intake are essential. Routine blood pressure monitoring and adherence to prescribed medications are also critical to control the condition effectively. We work with patients and communities to raise awareness about hypertension, promote preventive care, and encourage healthy habits to maintain optimal blood pressure levels.",
        },
        {
          id: 42,
          category: "health-event",
          title: "BREAST CANCER AWARENESS: EARLY DETECTION SAVES LIVES",
          image: "../Images/OLCH_outreach.jpg",
          content:
            "Breast cancer is one of the most common cancers among women, and early detection is key to successful treatment and survival. Regular self-examinations, clinical breast exams, and mammography screening for eligible women help identify abnormalities early. Awareness of warning signs such as lumps, changes in breast shape, skin dimpling, or unusual discharge can prompt timely medical evaluation. We encourage women to stay informed, practice early detection habits, and seek professional care promptly when changes are noticed, as early intervention significantly improves outcomes and long-term health.",
        },
      ];
      const newsContainer = document.getElementById("newsContainer");

      // Display news function
      function displayNews(newsArray) {
        newsContainer.innerHTML = "";
        newsArray.forEach((news) => {
          const card = document.createElement("div");
          card.className = "news-card";
          card.innerHTML = `
      <img src="${news.image}" alt="${news.title}">
      <div class="news-card-content">
        <h2>${news.title}</h2>
        <p class="preview">${news.content.substring(0, 150)}...</p>
        <p class="full" style="display:none;">${news.content}</p>
        <button class="read-all-btn">Read All</button>
        <button class="close-btn" style="display:none;">Close</button>
      </div>
    `;
          // Add event listeners
          const readBtn = card.querySelector(".read-all-btn");
          const closeBtn = card.querySelector(".close-btn");
          const preview = card.querySelector(".preview");
          const full = card.querySelector(".full");

          readBtn.addEventListener("click", () => {
            preview.style.display = "none";
            full.style.display = "block";
            card.classList.add("expanded"); // Make image expand
            readBtn.style.display = "none";
            closeBtn.style.display = "inline-block";
          });

          closeBtn.addEventListener("click", () => {
            preview.style.display = "block";
            full.style.display = "none";
            card.classList.remove("expanded");
            readBtn.style.display = "inline-block";
            closeBtn.style.display = "none";
          });

          newsContainer.appendChild(card);
        });
      }

      // Search news
      function searchNews() {
        const query = document
          .getElementById("searchInput")
          .value.toLowerCase();
        const filtered = newsData.filter(
          (n) =>
            n.title.toLowerCase().includes(query) ||
            n.content.toLowerCase().includes(query),
        );
        displayNews(filtered);
      }

      // Filter news function
      function filterNews(category, eventObj) {
        // Remove active from all buttons
        const buttons = document.querySelectorAll(".bottom-nav button");
        buttons.forEach((btn) => btn.classList.remove("active"));

        // Set active button
        eventObj.target.classList.add("active");

        // Filter news
        let filtered;
        if (category === "all") filtered = newsData;
        else filtered = newsData.filter((n) => n.category === category);

        displayNews(filtered);
      }

      // Initial display
      displayNews(newsData);