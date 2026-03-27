const productos = [
    { id: 1, nombre: "Full Body Workout Kettlebell 💪 Home Gym Must Have", descripcion: "Build strength at home with this 25lb cast iron kettlebell. Ideal for beginners and full body workouts including swings, squats and core training. A must-have for any home gym setup.", imagen: "https://i.pinimg.com/736x/96/f6/b6/96f6b675fb34f954390116c4ffdf85a5.jpg", link: "https://amzn.to/4rtlRj3", categoria: "Gym Essentials" },
    { id: 2, nombre: "Simple Home Workout Tool 💪 Kettlebell Training", descripcion: "Looking for a simple way to train at home? This 25lb cast iron kettlebell is perfect for strength training, fat burning, and full body workouts. Compact, durable, and ideal for any fitness level.", imagen: "https://i.pinimg.com/736x/f9/9e/61/f99e61670c606d6966ecccb22aa26815.jpg", link: "https://amzn.to/4rtlRj3", categoria: "Gym Essentials" },
    { id: 3, nombre: "Best Adjustable Weight Bench 2026 💪 Home Gym Essential", descripcion: "Build your home gym with this adjustable weight bench. Designed for strength training with 660LBS capacity, 8 backrest angles to target chest, shoulders, arms, and core. Compact, foldable, and perfect for small spaces.", imagen: "https://i.pinimg.com/736x/bd/43/c6/bd43c6f2cf9ff836fb3c16f249dd88c2.jpg", link: "https://amzn.to/3NU5RZE", categoria: "Gym Essentials" },
    { id: 4, nombre: "Amazon Must Have Weight Bench 🔥 Foldable Home Gym Setup", descripcion: "Upgrade your workouts with this foldable weight bench. 660LBS capacity, strong steel frame, and adjustable angles for full body training. Ideal for chest, shoulders, arms, and core workouts at home.", imagen: "https://i.pinimg.com/736x/64/fa/74/64fa748426653c6be018d9b16a2a54ae.jpg", link: "https://amzn.to/4bZ2zNS", categoria: "Gym Essentials" },
    { id: 5, nombre: "You Need This Weight Bench 💪 Small Space Home Gym", descripcion: "This adjustable workout bench is perfect for small apartments and home gyms. Foldable design, durable steel frame, and multiple angles to train every muscle efficiently. Easy setup and long-term durability.", imagen: "https://i.pinimg.com/736x/20/75/30/2075306c9db3e024c8f8f61701958cd9.jpg", link: "https://amzn.to/4dHr8QG", categoria: "Gym Essentials" },
    { id: 6, nombre: "Leg Day Essential for Women 💪 Ankle Strap", descripcion: "Upgrade your workouts with this foldable weight bench. 660LBS capacity, strong steel frame, and adjustable angles for full body training. Ideal for chest, shoulders, arms, and core workouts at home.", imagen: "https://i.pinimg.com/736x/0a/cb/72/0acb720bcd977309bf685c530b86fb62.jpg", link: "https://amzn.to/4bZ2zNS", categoria: "Gym Essentials" },
    { id: 7, nombre: "Ally Peaks Pull Up Bar", descripcion: "Turn your home into a gym with this heavy-duty pull-up bar! 💪🏠 Safe, durable, and easy to install – perfect for building strength anywhere.", imagen: "https://i.pinimg.com/736x/2a/af/7b/2aaf7bbdf135e9c5a28a347fdf99290d.jpg", link: "https://amzn.to/4bQu647", categoria: "Gym Essentials" },
    { id: 8, nombre: "Strength Training Made Easy – Weighted Vest", descripcion: "Integrate this adjustable weighted vest into your gym routine and see real results. Perfect for home or professional workouts!", imagen: "https://i.pinimg.com/736x/45/35/d5/4535d50b945434b71e993712fc2bac95.jpg", link: "https://amzn.to/4smmgFo", categoria: "Gym Essentials" },
    { id: 9, nombre: "Most Comfortable Ankle Strap for Cable Workouts", descripcion: "No more uncomfortable gym straps! This padded ankle strap is designed for comfort and performance. Perfect for beginners and consistent workouts.", imagen: "https://i.pinimg.com/736x/d6/0d/bf/d60dbf9d256379263d1311f73921087b.jpg", link: "https://amzn.to/4lJOSWG", categoria: "Gym Essentials" },
    { id: 10, nombre: "Grow Your Glutes 🍑 Cable Ankle Strap for Leg Day", descripcion: "Take your leg day to the next level with this comfortable ankle strap! Perfect for kickbacks, hip abductions, and glute workouts. Build strength and shape your lower body faster.", imagen: "https://i.pinimg.com/736x/59/17/18/5917180fc2e2545ded7522fb56d8cfd9.jpg", link: "https://amzn.to/4sMK3Ok", categoria: "Gym Essentials" },
    { id: 11, nombre: "Strong Upper Body Starts Here – Ally Peaks Pull Up Bar", descripcion: "Turn your doorway into a full upper-body gym! 🏠💪 Durable and heavy-duty for your fitness journey, from beginner to expert.", imagen: "https://i.pinimg.com/736x/be/3b/08/be3b08b74b69c415e648e18f179dec27.jpg", link: "https://amzn.to/4sdaRrj", categoria: "Gym Essentials" },
    { id: 12, nombre: "Build Muscle Anywhere – Pull Up Bar for Doorways", descripcion: " Perfect for pull-ups, push-ups, dips, and core exercises.Strong construction supports up to 440 lbs safely! Ideal for beginners and pros.", imagen: "https://i.pinimg.com/736x/6d/04/f4/6d04f4bc85ba6319a7a89b2e4666a6f3.jpg", link: "https://amzn.to/4sUDYj7", categoria: "Gym Essentials" },
    { id: 13, nombre: "Best Whey Protein for Muscle Growth 💪", descripcion: "Fuel your workouts with this high-quality whey protein delivering 24g of protein per scoop. Perfect for muscle growth, recovery, and daily protein intake.", imagen: "https://i.pinimg.com/736x/2c/3d/a2/2c3da238d5cfc01c15a2504a0159da98.jpg", link: "https://amzn.to/4slauLo", categoria: "Gym Essentials" },
    { id: 14, nombre: "Aegend Anti-Fog Swim Goggles 🏊 Leak-Proof UV Protection for Men & Women", descripcion: "Enjoy a clear and comfortable swim with Aegend Swim Goggles. Designed with anti-fog lenses, UV protection, and a leak-proof silicone seal, they provide a wide 180° panoramic view for indoor or outdoor swimming. Perfect for men, women, and youth swimmers looking for comfort and performance.", imagen: "https://i.pinimg.com/736x/81/86/71/8186712bff798e337dc1b84cd28a6f23.jpg", link: "https://amzn.to/4urqjS5", categoria: "Gym Essentials" },
    { id: 15, nombre: "Push Limits With This Weighted Vest", descripcion: "Take your workouts to the next level! Wear this vest during running, HIIT, or bodyweight exercises for better endurance and strength.", imagen: "https://i.pinimg.com/736x/64/ab/96/64ab9682ca97294a4bd485d39f029dff.jpg", link: "https://amzn.to/47sPZ7h", categoria: "Gym Essentials" },
    { id: 16, nombre: "High Energy Meal for Recovery 💪", descripcion: "Refuel your body after intense activity with this easy-to-prepare meal. Great option for recovery and maintaining energy levels.", imagen: "https://i.pinimg.com/736x/96/ff/ec/96ffecc5948551107dea149fde95f62c.jpg", link: "https://amzn.to/4sfST7o", categoria: "Gym Essentials" },
    { id: 17, nombre: "Boost Your Workout – Weighted Vest", descripcion: "Add resistance to your training and maximize results! Adjustable weighted vest for strength training, running, and full-body workouts.", imagen: "https://i.pinimg.com/736x/fa/56/71/fa5671f0213e93c3a4119dddb80c24c3.jpg", link: "https://amzn.to/4sRaq5V", categoria: "Gym Essentials" },
    { id: 18, nombre: "Weighted Vest for Strength Training 💪", descripcion: "Take your workouts to the next level with this adjustable weighted vest. Perfect for strength training, cardio, and muscle building, helping you increase resistance and boost performance.", imagen: "https://i.pinimg.com/736x/14/0a/fd/140afd61b911b6284c0570070e46ac8a.jpg", link: "https://amzn.to/4dnROG8", categoria: "Gym Essentials" },
    { id: 19, nombre: "Amazon Basics Cast Iron Kettlebell – 25lb for Strength & Resistance Training", descripcion: "Take your home workouts to the next level with this solid cast iron kettlebell! 🏋️‍♂️Versatile Training: Perfect for swings, squats, presses, and a full-body workout. Built to Last: 25 lb kettlebell made of durable cast iron for years of strength training. Secure Grip: Textured wide handle for one-hand or two-hand exercises. Compact & Efficient: Product dimensions 7.8 x 4.6 x 9 inches – fits your home gym easily.", imagen: "https://i.pinimg.com/736x/96/f6/b6/96f6b675fb34f954390116c4ffdf85a5.jpg", link: "https://amzn.to/4bZ2zNS", categoria: "Gym Essentials" },
    { id: 20, nombre: "Amazon Basics High-Density Foam Roller – Black for Balance & Recovery", descripcion: "Take your workouts and recovery to the next level with this high-density foam roller! 🖤Versatile Training: Perfect for balance, strengthening, flexibility, and post-workout recovery. Durable & Firm: Made from high-density polypropylene that keeps its shape over time. Comfortable Design: Molded edges for added comfort while rolling muscles. Lightweight & Portable: Easy to carry to class or move around your home gym. Easy to Clean: Wipe down after use for long-lasting freshness.", imagen: "https://i.pinimg.com/736x/57/4e/cf/574ecfb761e2f741916fe5ff043f4dc4.jpg", link: "https://amzn.to/4sPQPDe", categoria: "Gym Essentials" },
    { id: 21, nombre: "Ally Peaks Pull Up Bar for Doorway | Thickened Steel Max Limit 440 lbs Upper Body", descripcion: "Turn your home into a gym with this heavy-duty pull-up bar! 💪🏠 Ideal for pull-ups, push-ups, dips, and core exercises. Strong, durable construction for safe workouts at home. Perfect for beginners and fitness enthusiasts building muscle", imagen: "https://i.pinimg.com/736x/8d/59/e9/8d59e9e7a1d54f0c8c075e691bf3f6f8.jpg", link: "https://amzn.to/4usxObB", categoria: "Gym Essentials" },
    { id: 22, nombre: "Champion Sports Steel Softball Face Mask – Durable Fielder’s Mask for Youth & Adults", descripcion: "Stay safe and perform your best with this youth softball fielder’s mask! 🥎🛡️Classic steel design for durability and protection. Open face guard provides wide field of vision. Ponytail opening keeps hair out of your eyes. Adjustable fit for head sizes 6¼”–6¾”", imagen: "https://i.pinimg.com/736x/45/f9/8d/45f98d0475037daa943fa584fc6f1a1e.jpg", link: "https://amzn.to/3N2Y2AF", categoria: "Gym Essentials" },
    { id: 23, nombre: "Adidas Starlancer Club Soccer Ball", descripcion: "Enjoy casual games with this recreational soccer ball! ⚽ Soft touch with durable machine-stitched construction. Butyl bladder keeps its shape and air retention. Perfect for backyard, park, or casual play. Ships flat; pump not included", imagen: "https://i.pinimg.com/736x/26/f8/55/26f8555d5adc20726df9ede47c621ec8.jpg", link: "https://amzn.to/4b62hVd", categoria: "Gym Essentials" },
    { id: 24, nombre: "Gaiam Yoga Block", descripcion: "Enhance your yoga practice with this lightweight, durable yoga block! 🧘‍♀️✨ Helps improve balance, flexibility, and deeper stretches. Non-slip surface provides extra stability. Ideal for yoga, Pilates, and daily stretching routines. Suitable for beginners and experienced yogis", imagen: "https://i.pinimg.com/736x/52/7a/5b/527a5bb8b1e4d2c147f76df135b40d95.jpg", link: "https://amzn.to/4blnQ2S", categoria: "Gym Essentials" },
    { id: 25, nombre: "Rawlings | Remix & COOLFLO Batting Helmet | T-Ball| Multiple Colors", descripcion: "Keep young players safe on the field with this lightweight T-Ball helmet! 🏏🛡️Dual-density foam for extra protection. Ventilated design keeps players cool during games. Perfect for beginners, youth leagues, and T-Ball practice", imagen: "https://i.pinimg.com/736x/c9/e6/99/c9e6995bdd3f6df418205539b15f1030.jpg", link: "https://amzn.to/46SlLds", categoria: "Gym Essentials" },
    { id: 26, nombre: "Rainleaf Microfiber Towel Perfect Travel & Gym & Camping Towel", descripcion: "Stay dry and comfortable wherever you go with this microfiber travel towel! 🏕️💦 Ultra-absorbent and quick-drying for convenience. Lightweight, compact, and easy to pack. Soft on the skin; doubles as a blanket if needed. Perfect for hiking, gym, beach trips, yoga, and travel", imagen: "https://i.pinimg.com/736x/8f/c7/42/8fc74294034973c8905b05c5176572f8.jpg", link: "https://amzn.to/4aUZ5Mc", categoria: "Gym Essentials" },
    { id: 27, nombre: "SINOPHANT High Waisted Leggings with Pockets Women, Full Length Buttery Soft Stretchy Yoga Pants", descripcion: "Stay comfy and stylish with these ultra-soft leggings! 🏃‍♀️✨Side pockets perfect for phone, keys, or cards. Super stretchy & breathable fabric fits all body types. Ideal for workouts, yoga, and active lifestyles. Durable, soft, and opaque — moves with you all day", imagen: "https://i.pinimg.com/736x/2f/60/93/2f60939965b261e55f99ae4adb2096e7.jpg", link: "https://amzn.to/40mWoNc", categoria: "Gym Essentials" },
    { id: 28, nombre: "Trideer Exercise Ball for Yoga, Pilates & Fitness – Stability Ball Equipment for Home Gym", descripcion: "Take your home workouts to the next level with this durable anti-slip fitness ball! 🏋️‍♀️✨Textured surface for extra grip and safer movements. Perfect for yoga, Pilates, core exercises, and general workouts. Made with strong, burst-resistant material for long-lasting use. Ideal for all fitness levels and home gym routines", imagen: "https://i.pinimg.com/736x/67/b8/c1/67b8c1895324e130576feaf6afc9f64b.jpg", link: "https://amzn.to/4skGwqs", categoria: "Gym Essentials" },
    { id: 29, nombre: "Sports Research Sweet Sweat Waist Trimmer for Women & Men", descripcion: "Take your cardio and HIIT sessions to the next level with this waist trimmer belt! 🔥💪 Increases heat to help you sweat more during workouts. Comfortable, secure fit for all-day training support. Perfect for cardio, HIIT, gym sessions, and general fitness. Motivates you to push harder and stay consistent.", imagen: "https://i.pinimg.com/736x/df/8d/e2/df8de23e5f40eb8578c7ceb2133c22eb.jpg", link: "https://amzn.to/4lkrWNp", categoria: "Gym Essentials" },
    { id: 30, nombre: "Cool Coolers by Fit & Fresh 4 Pack XL Slim Ice Packs", descripcion: "Keep your meals and drinks cold anywhere with these XL Ice Packs! ❄️🥪 Perfect for lunch bags, beach trips, picnics, or school lunches. Versatile design fits easily in coolers or lunch boxes. Keeps items fresh and cold for longer, ideal for everyday outings.", imagen: "https://i.pinimg.com/736x/9f/f8/d4/9ff8d4b13ca37f26642642729d5e178f.jpg", link: "https://amzn.to/4lvMgLZ", categoria: "Gym Essentials" },
    
    { id: 31, nombre: "Rawlings | REMIX Backpack Equipment Bag | T-Ball & Youth Baseball / Softball | Royal", 
        descripcion: "Keep your baseball gear neat and ready with this durable youth baseball backpack! ⚾🎒Multiple pockets for equipment, bats, and water bottles Lightweight and easy to carry for practices and games. Perfect for T-Ball, youth leagues, and summer sports activities", 
        imagen: "https://i.pinimg.com/736x/64/d9/a4/64d9a46ab3e17e43370c002f675eded7.jpg", 
        link: "https://amzn.to/4ugVako", categoria: "Gym Essentials" },
    
    { id: 32, nombre: "ProsourceFit Puzzle Exercise Mat ½ in, EVA Interlocking Foam Floor Tiles for Home Gym", 
        descripcion: "Protect your floors and upgrade your workouts with this durable foam gym mat! 🏋️‍♂️🧩 Durable, non-skid mats that protect floors and carpets. High-density EVA foam for excellent support and cushioning. Water-resistant, noise-reducing, and easy to clean. Lightweight interlocking pieces for quick assembly and storage. Perfect for home gyms, garage floors, play areas, or fitness rooms.", 
        imagen: "https://i.pinimg.com/736x/ca/e0/5d/cae05dc269bb8c6646580df5091ccc32.jpg", 
        link: "https://amzn.to/4aMp2xm", categoria: "Gym Essentials" },    

    { id: 33, nombre: "FitBeast Grip Strengthener Forearm Strengthener Hand Grips Strengthener Kit", 
        descripcion: "Build stronger hands and wrists with this ergonomic hand grip strengthener! 💪✋ Contoured grips reduce strain and improve comfort. Compact, textured, non-slip design – perfect for home, office, gym, or travel. Adjustable resistance for beginner to advanced levels. Ideal for athletes, musicians, office workers, or rehab exercises. Durable design with reliable customer support", 
        imagen: "https://i.pinimg.com/736x/ec/5b/47/ec5b47bbcdd19d79ce45d67a1c6eb13d.jpg", 
        link: "https://amzn.to/4cgmWqE", categoria: "Gym Essentials" },  
    
    { id: 34, nombre: "AXV Vibration Plate Fitness Platform Exercise Machine Vibrating Shaking Full Body Shaker", 
        descripcion: "Take your home fitness to the next level with this vibration plate exercise machine! ⚡🏋️‍♂️Stimulates muscles for increased activation and full-body trainingSupports circulation, muscle tone, and recovery. Perfect for cardio, strength, and home workout routines. Compact and easy to use at home", 
        imagen: "https://i.pinimg.com/736x/9e/9b/9d/9e9b9d606ddc2f2183d45a0ab4d5b5e9.jpg", 
        link: "https://amzn.to/4kWDA0J", categoria: "Gym Essentials" }, 
    
    { id: 35, nombre: "Jump Rope, Tangle-Free Rapid Speed Jumping Rope Cable with Ball Bearings for Women, Men, and Kids", 
        descripcion: "Take your cardio to the next level with this durable and adjustable jump rope! 🔥🤸‍♂️ Steel wire rope coated with strong PVC for long-lasting durability. Adjustable length fits kids and adults of all sizes. High-quality ball bearings for smooth, tangle-free jumps. Ergonomic foam handles for comfort and secure grip. Perfect for home workouts, HIIT, and cardio training ", 
        imagen: "https://i.pinimg.com/736x/ab/3f/08/ab3f08ff49e3755a9b8a748f8f4b098f.jpg", 
        link: "https://amzn.to/4sehxFj", categoria: "Gym Essentials" }, 
        
    { id: 36, nombre: "ATERCEL Workout Gloves for Men and Women, Exercise Gloves for Weight Lifting, Cycling, Gym, Training", 
        descripcion: "Keep your hands safe and comfortable during every workout with these breathable fitness gloves! 🏋️‍♀️🖐️ Protects hands from calluses and reduces friction. Lightweight, breathable, and stretchy for all-day comfort. Ideal for weightlifting, gym training, and cycling. Perfect accessory for any home or gym workout routine", 
        imagen: "https://i.pinimg.com/736x/86/1e/22/861e22eef7c043040050457c53f2a9b2.jpg", 
        link: "https://amzn.to/4qUaa4z", categoria: "Gym Essentials" }, 


    { id: 37, nombre: "Ski Goggles OTG - Over Glasses Snow/Snowboard Goggles for Men, Women & Youth - 100% UV Protection", descripcion: "Hit the slopes with clear vision and comfort using these professional ski goggles! 🎿❄️Advanced ventilation system reduces fogging and moisture. Durable double lenses: anti-scratch, anti-fog, impact-resistant. 100% UV protection with wide HD spherical view. OTG design fits comfortably over prescription glasses. Helmet-compatible with adjustable non-slip strap. Triple-layer foam for warmth and comfort. Suitable for men, women, and kids 10+", 
        imagen: "https://i.pinimg.com/736x/ea/86/a3/ea86a36e6186d299d378b64de562dd75.jpg", 
        link: "https://amzn.to/4sgiCfw", categoria: "Gym Essentials" },

    { id: 38, nombre: "Amazon Basics High Density Foam Roller", descripcion: "High-density foam roller in Black. Ideal for balance, strengthening, and flexibility exercises. Firm, durable polypropylene maintains shape; molded edges for added comfort. Lightweight and easy to carry to class and to reposition during workouts. Wipes clean easily. Product Dimensions: 18 x 6 x 6 inches (LxWxH)", 
            imagen: "https://i.pinimg.com/736x/53/05/2c/53052cd94dc670508d02862aa63f0d75.jpg", 
            link: "https://amzn.to/3Ou2sRr", categoria: "Gym Essentials" },


    { id: 39, nombre: "Amazon Basics Neoprene Dumbbell Hand Weights for Exercise and Muscle Toning", descripcion: "Take your workouts to the next level with this 15 lb neoprene dumbbell set (2 pieces)! 🏋️‍♂️💪Durable & Long-Lasting: Grey neoprene coating resists wear and tear. Safe Storage: Hexagon ends prevent rolling for hassle-free use. Non-Slip Grip: Comfortable and secure hold for all exercises. Versatile: Available in multiple sizes to mix and match your routine. Easy Identification: Printed weight numbers and color coding.", 
            imagen: "https://i.pinimg.com/736x/c5/c6/94/c5c694cf77df9265e206227b48a9e915.jpg", 
            link: "https://amzn.to/4c20x01", categoria: "Gym Essentials" },    
            
            
    { id: 40, nombre: "OEAK Womens Deep V Bras Wireless Comfortable Bra", descripcion: "Elevate your style with the OEAK Deep V Wireless Bra! 👙✨Sexy Plunge Design: Gathers and lifts for a perfectly shaped, round bust. Showcases Neckline: Highlights collarbones and cleavage under t-shirts and dresses. Seamless & Comfortable: Ideal for low-cut tops with a smooth, invisible fit. Full Support: W-shaped 3D liquid jelly band provides lift without wires. Everyday Elegance: Combines style, comfort, and practicality in one.", 
            imagen: "https://i.pinimg.com/736x/7d/e2/72/7de27279f535d702bf47dd432e2ac107.jpg", 
            link: "https://amzn.to/4rIjKcl", categoria: "Gym Essentials" },         
            
    { id: 41, nombre: "Gymreapers Lifting Wrist Straps for Weightlifting, Bodybuilding, Powerlifting, Strength Training", descripcion: "Push past grip fatigue and lift with confidence using these Gymreapers cotton lifting straps! 💪🏋️‍♂️Secure your hands to the bar for better strength, form, and execution. Ideal for deadlifts, rows, pull-ups, shrugs, and other pulling movements. Reduce forearm fatigue and shift the workload to target muscles. Helps increase volume, intensity, and overall lifting performance. Perfect for serious lifters aiming to break personal records.", 
            imagen: "https://i.pinimg.com/736x/d0/fd/65/d0fd65ee6f702c3c72d7dc401cbd8399.jpg", 
            link: "https://amzn.to/46pk0Eh", categoria: "Gym Essentials" },

   { id: 42, nombre: "Fit Simplify Resistance Loop Exercise Bands with Instruction Guide and Carry Bag, Set of 5", descripcion: "Take your workouts anywhere with this resistance band set! 💪🏠Multiple resistance levels for beginners and advanced athletes. Perfect for strength training, stretching, and mobility exercises. Lightweight, portable, and easy to carry for home, gym, or travel. Ideal for full-body workouts, yoga, Pilates, and rehab sessions.", 
            imagen: "https://i.pinimg.com/736x/d9/68/14/d9681485bbfd97ad9e0732b827b933bc.jpg", 
            link: "https://amzn.to/4rt16F0", categoria: "Gym Essentials" }, 
   
   { id: 43, nombre: "Amazon Basics Rubber Hex Dumbbell Hand Weight", descripcion: "Level up your workouts with this durable 15 lb dumbbell! 🏋️‍♂️💪Solid cast iron with rubber-encased heads for long-lasting strength. Hexagon-shaped ends prevent rolling and keep your space safe. Non-slip, textured grip with contoured handle for comfort. Perfect for arms, chest, back, core, and leg exercises. Available in multiple sizes for progressive strength training.", 
            imagen: "https://i.pinimg.com/736x/d9/68/14/d9681485bbfd97ad9e0732b827b933bc.jpg", 
            link: "https://amzn.to/4sunVbO", categoria: "Gym Essentials" },           
   
   { id: 44, nombre: "Gymreapers Ankle Straps For Cable Machine Kickbacks, Glute Workouts, Lower Body Exercises", descripcion: "Enhance your lower-body workouts with these ankle straps! 🍑💪Targeted Training: Perfect for glute kickbacks, leg curls, and cable machine exercises. Versatile Use: Ideal for gym sessions or home workouts. Durable & Comfortable: Built to withstand repeated resistance training while keeping you secure.", 
                imagen: "https://i.pinimg.com/736x/bc/91/bc/bc91bc2dc1d1de988e879b4d86f95496.jpg", 
                link: "https://amzn.to/4azjiW9", categoria: "Gym Essentials" },
                
   { id: 45, nombre: "Youth Baseball Helmet ⚾ Cool & Comfortable Fit", descripcion: "This Rawlings batting helmet is perfect for T-ball players. Designed with COOLFLO venting system to keep players cool, secure fit for comfort, and durable construction for long-term performance. One size fits most.", 
                imagen: "https://i.pinimg.com/736x/8d/49/bd/8d49bd65b4d4b58ef1f44feb72356288.jpg", 
                link: "https://amzn.to/3PokbKs", categoria: "Healthy Lifestyle" },        
                
   { id: 46, nombre: "You Need These Wellness Gummies 🍏 Daily Health Boost", descripcion: "Upgrade your wellness routine with these apple cider vinegar gummies. Designed to support metabolism, digestion, and energy levels. Perfect for busy lifestyles and daily health goals.", 
                imagen: "https://i.pinimg.com/736x/de/75/aa/de75aa1e3539a83e9a1b35d02337f768.jpg", 
                link: "https://amzn.to/4lIlik9", categoria: "Healthy Lifestyle" },                
               
   { id: 47, nombre: "Amazon Must Have Wellness Gummies 🍏 Energy & Digestion", descripcion: "Boost your daily routine with these metabolism gummies. Infused with apple cider vinegar, Vitamin B12, and chromium to support energy and digestive health. A simple and delicious way to stay consistent.", 
                imagen: "https://i.pinimg.com/736x/67/4c/5e/674c5e0c88bd7c86c0d23300b2b9fe90.jpg", 
                link: "https://amzn.to/4lIl6RX", categoria: "Healthy Lifestyle" },
                
   { id: 48, nombre: "Apple Cider Vinegar Gummies 🍏 Metabolism Boost Daily", descripcion: "Support your metabolism and energy levels with these apple cider vinegar gummies. Made with Vitamin B12 and chromium, perfect for digestive health and daily wellness routines. Easy, tasty, and convenient for everyday use.", 
                imagen: "https://i.pinimg.com/736x/b1/2d/da/b12dda2cc35a8214d7148d05507aff45.jpg", 
                link: "https://amzn.to/47eiF3A", categoria: "Healthy Lifestyle" }, 
                
   { id: 49, nombre: "Healthy Doesn’t Have to Be Boring 😋 Protein Shake", descripcion: "Craving something sweet? This Fruity Pebbles protein shake gives you the taste you love while helping you stay on track with your fitness goals.", 
                imagen: "https://i.pinimg.com/736x/50/eb/c8/50ebc885d08e7c80aebd6187b74ed545.jpg", 
                link: "https://amzn.to/4bzxuPI", categoria: "Healthy Lifestyle" },   
                
   { id: 50, nombre: "Fuel Your Workout with 25g Protein 💪", descripcion: "Support muscle growth and recovery with this fast-absorbing whey protein. Low carbs, low fat, and perfect for pre or post workout.", 
                imagen: "https://i.pinimg.com/736x/83/4b/72/834b72fe53ba65cb085c23fc40c60050.jpg", 
                link: "https://amzn.to/4seRr5k", categoria: "Healthy Lifestyle" },          
                
                
   { id: 51, nombre: "Fruity Pebbles Protein Shake 🍓 High Protein Treat", descripcion: "Enjoy your protein like never before! This Fruity Pebbles whey protein delivers amazing flavor with 25g of protein and low sugar. Perfect for your healthy lifestyle.", 
                imagen: "https://i.pinimg.com/736x/0e/e6/fa/0ee6faa2960b4f574be5a9ff9de9640b.jpg", 
                link: "https://amzn.to/4uDdZ15", categoria: "Healthy Lifestyle" },                  

   { id: 52, nombre: "Electrolyte Hydration Powder – Lemon Lime Drink Mix for Energy & Recovery", descripcion: "Boost your hydration and energy with Liquid I.V.® Hydration Multiplier! 🍋💧Perfect for workouts, travel, or outdoor adventures. Fast-acting electrolyte powder for staying refreshed all day. Just mix with water for a convenient hydration boost", 
                imagen: "https://i.pinimg.com/736x/c2/f5/f1/c2f5f1cc01f355356debfb63ae9d7c3d.jpg", 
                link: "https://amzn.to/470shio", categoria: "Healthy Lifestyle" },    
                
   { id: 53, nombre: "Etekcity Food Kitchen Scale, Digital Grams and Ounces for Weight Loss, Baking, Cooking", descripcion: "Measure ingredients accurately and effortlessly with this digital kitchen scale! 🥗⚖️ Supports multiple units: oz, lb:oz, fl’oz, g, mL with tare function. Accurately weighs up to 11 lb / 5 kg in 1 g increments. Compact, sleek design fits easily in most kitchens and cabinets. Easy-to-clean 304 food-grade stainless steel surface. Backlit LCD display with large fonts for quick reading. Includes 2 AAA batteries for immediate use.", 
                imagen: "https://i.pinimg.com/736x/a4/41/4b/a4414bc60f30c4c97e580d7e7a3c5dbf.jpg", 
                link: "https://amzn.to/4b3ZSKt", categoria: "Healthy Lifestyle" }, 
   
   { id: 54, nombre: "Downshiftology Healthy Meal Prep: 100+ Make-Ahead Recipes", descripcion: "Simplify your meals and eat healthy with the Downshiftology Meal Prep Cookbook! 🥗🍴Amazon Bestseller: Publisher’s Weekly national bestseller with 100 fresh, gluten-free dishes. Practical & Easy: Learn to prep meals efficiently and reduce food waste. Healthy & Delicious: Recipes focus on whole ingredients for balanced eating. From the Creator of Downshiftology: Tips from Lisa Bryan, popular blogger & YouTuber.", 
                imagen: "https://i.pinimg.com/736x/79/0a/b6/790ab69ea85184836e2818f6d43646d0.jpg", 
                link: "https://amzn.to/3MsFuJM", categoria: "Healthy Lifestyle" },   
                
                
   { id: 55, nombre: "Protect Your Kids ⚾ Baseball Helmet Must Have", descripcion: "Keep your kids safe on the field with this Rawlings batting helmet. Features dual density foam lining, secure fit, and ventilation system for comfort during games and practice. Meets safety standards for youth baseball.", 
                imagen: "https://i.pinimg.com/736x/40/c2/e5/40c2e52d7a74f4151c0f524f3145a046.jpg", 
                link: "https://amzn.to/47ZkbXy", categoria: "Outdoor Adventure Gear" }, 
                
   { id: 56, nombre: "Bestseller Kids Batting Helmet ⚾ Safe & Comfortable", descripcion: "One of the best-selling batting helmets for kids. Designed for T-ball players with dual density foam for comfort and protection. COOLFLO venting system keeps players cool and dry during every game.", 
                imagen: "https://i.pinimg.com/736x/c9/e6/99/c9e6995bdd3f6df418205539b15f1030.jpg", 
                link: "https://amzn.to/4lFWvNy", categoria: "Outdoor Adventure Gear" },      
                
   { id: 57, nombre: "You Need This Tactical Backpack 🎯 Travel & Survival Gear", descripcion: "Upgrade your gear with this tactical backpack. Perfect for outdoor adventures, travel, hiking, and survival. Large 45L capacity with molle system for maximum storage and versatility.", 
                imagen: "https://i.pinimg.com/736x/90/b5/13/90b5139fe499c6d44cc1bb2289d14c75.jpg", 
                link: "https://amzn.to/4lFWvNy", categoria: "Outdoor Adventure Gear" },   
                
   
   { id: 58, nombre: "Amazon Must Have Tactical Backpack 🔥 45L Military Gear", descripcion: "This tactical backpack is a must-have for outdoor lovers. 45L military backpack ideal for hiking, camping, travel, and survival situations. Strong, durable, and designed for heavy-duty use.", 
                imagen: "https://i.pinimg.com/736x/da/8e/1a/da8e1a91ba3c5c2ad6cef71134f3d042.jpg", 
                link: "https://amzn.to/3NVtWPP", categoria: "Outdoor Adventure Gear" },   
                
   { id: 59, nombre: "Best Tactical Backpack 2026 🎒 Outdoor Must Have", descripcion: "Make your outdoor adventures to the next level with this 45L tactical backpack. Durable military backpack perfect for hiking, camping, travel, survival, and everyday use. Spacious rucksack with molle system built for performance.", 
                imagen: "https://i.pinimg.com/736x/92/d8/61/92d8610d8981014af392d8bf58f3bf07.jpg", 
                link: "https://amzn.to/4m2Hp5f", categoria: "Outdoor Adventure Gear" },      

   { id: 60, nombre: "Outdoor Essential You Need for Every Trip 🌲", descripcion: "Whether you’re hiking, biking, or exploring, this hydration pack keeps your essentials organized and your water always within reach.", 
                imagen: "https://i.pinimg.com/736x/03/bb/5f/03bb5fcdfaa0514e3a184dc9251c6ad7.jpg", 
                link: "https://amzn.to/4smx0ne", categoria: "Outdoor Adventure Gear" },   
                
   { id: 61, nombre: "2L Hydration Pack for Hiking & Running", descripcion: "Take your outdoor workouts to the next level with this 2L hydration backpack. Lightweight, breathable, and designed for comfort on long trips.", 
                imagen: "https://i.pinimg.com/736x/ae/39/c1/ae39c15c5efe51b6526001fa71e77007.jpg", 
                link: "https://amzn.to/4blXxLm", categoria: "Outdoor Adventure Gear" },        
   
   { id: 62, nombre: "Stay Hydrated Anywhere 💧 Lightweight Hydration Backpack", descripcion: "Perfect for hiking, running, and cycling, this lightweight hydration backpack keeps you hydrated on every adventure. Comfortable, durable, and easy to carry!", 
                imagen: "https://i.pinimg.com/736x/d3/1b/77/d31b775470d2c160084a62caaea18306.jpg", 
                link: "https://amzn.to/4uDEhQX", categoria: "Outdoor Adventure Gear" },
                
   { id: 63, nombre: "Your Outdoor Essentials Stay Dry – Waterproof Backpack Bag", descripcion: "Whether you’re camping, kayaking, or exploring nature, this dry bag keeps your valuables protected and dry. Lightweight and versatile gear for every adventure!", 
                imagen: "https://i.pinimg.com/736x/49/ac/04/49ac045299ad5c97024d89d83b89055f.jpg", 
                link: "https://amzn.to/3PgkW8s", categoria: "Outdoor Adventure Gear" },
   
   { id: 64, nombre: "Baseball & Softball Glove – Easy Break-In Fielding Mitt for Youth & Adults", descripcion: "Step up your game with this lightweight baseball and softball glove! ⚾🖐️Quick break-in for game-ready performance. Adjustable wrist strap for a secure, snug fit. Hand-formed pocket for easier, more responsive catches. Perfect for beginners, youth, and recreational players.", 
                imagen: "https://i.pinimg.com/736x/49/ac/04/49ac045299ad5c97024d89d83b89055f.jpg", 
                link: "https://amzn.to/4rvCcUs", categoria: "Outdoor Adventure Gear" },
   
   { id: 65, nombre: "Adventure Ready – Waterproof Dry Bag for Outdoor Trips", descripcion: "Adventure Ready – Waterproof Dry Bag for Outdoor Trips", 
                imagen: "https://i.pinimg.com/736x/c0/9c/fd/c09cfd4786d050488837a84dae68e6ed.jpg", 
                link: "https://amzn.to/4bygCbZ", categoria: "Outdoor Adventure Gear" },
                
   { id: 66, nombre: "Waterproof Dry Bag – Protect Your Gear on Every Adventure", descripcion: "Keep your essentials safe and dry wherever you go with this waterproof dry bag backpack. Perfect for kayaking, camping, beach days, and outdoor fun!", 
                imagen: "https://i.pinimg.com/736x/75/fc/96/75fc96aaccdffbcb8ad8eafb11ae21cd.jpg", 
                link: "https://amzn.to/4bCYEoV", categoria: "Outdoor Adventure Gear" },                                       

   { id: 67, nombre: "LOVEVOOK 40L Travel Backpack for Women & Men, Airline Approved Carry On Luggage with 3 Packing Cubes", descripcion: "Travel smart and organized with this versatile airline-approved carry-on backpack! 🧳✈️Fits under the seat or in the overhead bin; approved by Spirit, Frontier, JetBlue, and more. Spacious 40L capacity with 4 compartments and multiple pockets. Organize your personal items for 3–7 days of travel. Perfect for weekend trips, business travel, or daily commuting. Lightweight, durable, and easy to carry.", 
                imagen: "https://i.pinimg.com/736x/7b/5e/8f/7b5e8f8ecc82dd7d0193622e7795214c.jpg", 
                link: "https://amzn.to/3Mqz9P7", categoria: "Outdoor Adventure Gear" },  
   
   { id: 68, nombre: "LOVEVOOK 40L Travel Backpack for Women & Men, Airline Approved Carry On Luggage with 3 Packing Cubes", descripcion: "Travel in comfort with the FlyHugz U-shaped neck pillow! ✈️🛌Ultimate Neck Support: Keeps head and neck upright to prevent aches and strains. Comfortable & Breathable: Soft, sweat-resistant fabric keeps you cool on long trips. Chin Support: Helps reduce snoring and mouth-opening while napping. Travel-Ready: Perfect for airplanes, trains, cars, and long commutes. Easy Care: Machine-washable, fast-drying cover for fresh comfort every journey.", 
                imagen: "https://i.pinimg.com/736x/75/bd/84/75bd843da2d2261e96031b9f1cf0d0d9.jpg", 
                link: "https://amzn.to/4cAiuTA", categoria: "Outdoor Adventure Gear" },                                      

   { id: 69, nombre: "JBL Clip 5 Portable Bluetooth Speaker 🔊 Waterproof Travel Speaker with Carabiner", descripcion: "Take your music anywhere with the JBL Clip 5 Portable Bluetooth Speaker. This ultra-portable, waterproof and dustproof speaker delivers big JBL sound with punchy bass. The integrated carabiner makes it easy to clip onto backpacks for travel, hiking, or outdoor adventures, with up to 12 hours of playtime.", 
                imagen: "https://i.pinimg.com/736x/f4/a3/fb/f4a3fb6f636ddeee0fc74ba2d365b6c4.jpg", 
                link: "https://amzn.to/4ltWSe2", categoria: "Amazon Fitness Finds" }, 
                
   { id: 70, nombre: "1 Gallon Insulated Water Bottle 💧 48H Cold | Perfect for Gym & Hiking", descripcion: "Stay hydrated with this 1 gallon insulated stainless steel water bottle. Triple-wall vacuum insulation keeps drinks cold for 48 hours and hot for 24. Includes leak-proof straw & spout lids plus a paracord handle with compass, perfect for the gym, hiking, camping, and travel.", 
                imagen: "https://i.pinimg.com/736x/ed/09/ff/ed09ff23a5160934fc3a07db90d4e8d8.jpg", 
                link: "https://amzn.to/3N3VjXK", categoria: "Amazon Fitness Finds" },     
   
   { id: 71, nombre: "ZELUS Weighted Vest – Adjustable 6–30lb for Workouts, Running & Strength Training", descripcion: "Push your workouts to the next level with the ZELUS Weighted Vest! 🏋️‍♂️Evenly distributed iron sand for strength, running, yoga, or HIIT. Adjustable buckle straps fit chest sizes 31.5'–45'. Soft, durable spandex for all-day comfort. Armband pouch & rear mesh pocket for keys, phone, or snacks; reflective strips keep you visible.", 
                imagen: "https://i.pinimg.com/736x/7c/80/d7/7c80d7b117a30efbdf5a7572b578fbf7.jpg", 
                link: "https://amzn.to/4sjFD1W", categoria: "Amazon Fitness Finds" },    

   { id: 72, nombre: "Hanes mens Underwear Boxer Briefs Pack, Cool & Breathable Cotton Moisture-wicking Underwear for Men", descripcion: "Stay comfortable and supported all day with these men’s cotton boxer briefs! 🩲✨No-ride-up fit with Comfort Flex waistband for secure, all-day comfort. Soft cotton or cotton-rich blend that moves with you. Moisture-wicking Cool Comfort technology keeps you dry during workouts or daily wear. Ideal for active lifestyles or lounging at home. Breathable and flexible design for maximum comfort.", 
                imagen: "https://i.pinimg.com/736x/9b/f7/8d/9bf78dadaff06a2380eee065a7cfd915.jpg", 
                link: "https://amzn.to/4tR3Ai7", categoria: "Amazon Fitness Finds" },                          
   
   { id: 73, nombre: "OneOdio Wired Over Ear Headphones Hi-Res Studio Monitor & Mixing DJ Stereo Headsets", descripcion: "Experience professional-quality sound and all-day comfort with the OneOdio Studio Monitor Headphones! 🎧🎶Powerful Bass & Clear Audio: 50mm speaker drivers with neodymium magnets deliver crisp highs, clear vocals, and balanced stereo sound. Built for Comfort: Soft padded ear cushions and adjustable headband for long listening sessions. Noise Isolation: Enjoy immersive sound without distractions. Perfect for Studio & Home Use: Ideal for music production, gaming, or everyday listening.", 
                imagen: "https://i.pinimg.com/736x/09/2a/2c/092a2cf0936010a3453f4bc2f9a32c36.jpg", 
                link: "https://amzn.to/3Olf2Ct", categoria: "Amazon Fitness Finds" },
            
   { id: 74, nombre: "STANLEY Quencher H2.0 Tumbler with Handle and Straw 30 oz | Flowstate 3-Position Lid", descripcion: "Keep your drinks at the perfect temperature all day with the H2.0 FlowState Tumbler! 🥤❄️☕Ultimate Hydration: Double-wall vacuum insulation keeps drinks cold, iced, or hot for hours. Multiple Sizes: Available in 14oz, 20oz, 30oz, 40oz, and 64oz – fits your lifestyle. Car-Friendly: Narrow base (except 64oz) fits most cup holders for on-the-go sipping. Advanced Lid: Rotating cover with straw opening, drink opening, or full-cover for leak resistance. Durable & Convenient: Perfect for work, travel, outdoor adventures, or home use.", 
                imagen: "https://i.pinimg.com/736x/c8/41/4d/c8414d28b7f230a29107f57ba22d558b.jpg", 
                link: "https://amzn.to/4aF5U33", categoria: "Amazon Fitness Finds" },         


   { id: 75, nombre: "Owala FreeSip Insulated Stainless Steel Water Bottle with Straw", descripcion: "Keep your drinks cold and your hydration game strong with this 24oz insulated water bottle! ❄️💦Dual Sipping Options: Patented FreeSip spout allows upright sipping or tilting back to swig. Protective Lid: Push-to-open lid keeps spout clean, carry loop doubles as a lock. Long-Lasting Cold: Double-wall insulation keeps drinks cold up to 24 hours; wide opening for ice and easy cleaning. Safe & Convenient: BPA, lead, and phthalate-free; dishwasher-safe lid; hand wash cup; fits cup holders.", 
                imagen: "https://i.pinimg.com/736x/61/42/69/6142690cc94d2838746d41b349993a9d.jpg", 
                link: "https://amzn.to/4kXPJTj", categoria: "Amazon Fitness Finds" },          
                
                
   { id: 76, nombre: "GooingTop LED Grow Light,6000K Full Spectrum Clip Plant Growing Lamp with White Red LEDs", descripcion: "Give your indoor plants the perfect sunlight all year round with this Full Spectrum LED Grow Light! 🌞🌿 Optimal Light for Growth: 10 Red + 74 White LEDs simulate full-spectrum sunlight (6000K) for healthier plants. High Color Accuracy: Soft, flicker-free light with CRI 95 – also perfect as a reading lamp. Custom Timer Settings: Choose 4H, 8H, or 12H per 24-hour cycle for automated plant care. Easy & Convenient: Simple to set, ideal for indoor gardens, seedlings, and houseplants.", 
                imagen: "https://i.pinimg.com/736x/ce/43/e1/ce43e105f618651ce8ceff054bc11d51.jpg", 
                link: "https://amzn.to/4aD6e2d", categoria: "Amazon Fitness Finds" },  
                
    { id: 77, nombre: "Franklin Sports X-40 Outdoor Pickleballs - Official Ball of USA Pickleball, APP Tour + US Open", descripcion: "Play your best game with Franklin X-40 Outdoor Pickleballs! 🏓🌟40 machine-drilled holes for balanced flight and consistent spin. One-piece construction for durability and dent resistance. Perfect for outdoor courts, pro and amateur players alike. USA Pickleball approved.", 
                imagen: "https://i.pinimg.com/736x/ba/40/b5/ba40b532e6d33ea29cad291badfba4ac.jpg", 
                link: "https://amzn.to/40Ujkn7", categoria: "Gym Essentials" },   
                
                
    { id: 78, nombre: "Take your workouts to the next level with this beginner-friendly punching bag set 🥊", descripcion: "Adjustable height stand for teens and adults. Spring-loaded design for fast rebound and better training. Includes gloves, pump, and stable base for home workouts.", 
                imagen: "https://i.pinimg.com/736x/6d/46/fe/6d46feba37559f625ac79bfabf8b19e5.jpg", 
                link: "https://amzn.to/4uU7A1H", categoria: "Beginner Workout Gear" },             
                
                
    { id: 79, nombre: "Youth Baseball Glove for Kids (Ages 3–5) | Lightweight T-Ball Beginner Glove", descripcion: "Perfect starter glove for young baseball players learning the game. This lightweight youth baseball glove is designed for comfort and easy catching, helping beginners practice their fielding skills with confidence. Great for backyard practice, park games, and little league training. ", 
                imagen: "https://i.pinimg.com/736x/43/23/08/432308550e0029440ec78613c2ea36d6.jpg", 
                link: "https://amzn.to/4lw1Uqt", categoria: "Beginner Workout Gear" }, 
                
    { id: 80, nombre: "NCAA Final Four Basketball – Official Size Indoor Game Ball", descripcion: "Take your game to the next level with the WILSON NCAA Final Four Basketball! 🏀 High-definition pebble surface for superior grip. Deep channel construction for better handling and control. Durable design built for indoor games, practice, and training", 
                imagen: "https://i.pinimg.com/736x/4d/e6/13/4de613bfa59bfe497ef3ddc1ad3cb3ff.jpg", 
                link: "https://amzn.to/4uyYCHe", categoria: "Beginner Workout Gear" },    
    
    { id: 81, nombre: "Sculpt your glutes with precision using these ankle straps for cable machines 🍑", descripcion: "Designed to target glutes without using momentum. Soft padded support for comfortable workouts. Perfect for kickbacks, leg day, and home or gym training", 
                imagen: "https://i.pinimg.com/736x/50/14/2c/50142cf17f4bb7ef7ee6762746e747f6.jpg", 
                link: "https://amzn.to/3O6GC6x", categoria: "Gym Essentials" },             
           
            ];