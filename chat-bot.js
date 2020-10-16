function chatBot() {
	
	// current user input
	this.input;
	
	/**
	 * respondTo
	 * 
	 * return nothing to skip response
	 * return string for one response
	 * return array of strings for multiple responses
	 * 
	 * @param input - input chat string
	 * @return reply of chat-bot
	 */
	this.respondTo = function(input) {
	
		this.input = input.toLowerCase();
		
		if(this.match('(hi|hello|hey|hola|howdy)(\\s|!|\\.|$)'))
			return "hey, how may I help you";
		
		if(this.match('what[^ ]* up') || this.match('sup') || this.match('my diet'))
			return "choose male or female";
		
		if(this.match('MALE') || this.match('Male') || this.match('male'))
			return ["choose program 1. weight gain for man","2. weight loss for man","3. weight training for man"];

		if(this.match('FEMALE') || this.match('Female') || this.match('female'))
			return ["choose program 1. weight gain for woman","2. weight loss for woman","3. weight training for woman"];	
		
		if(this.match('weight gain for woman'))
			return ["Daily calorie needs range from 1,600 to 2,400 calories per day for adult women","Carbs 30 to 400 grams, Fat 60 to 150 grams, Protein 75 to 200 grams","Foods to eat- oats, rice, breads, pastas,whole eggsavocados, berries, apples, bananas, pears, oranges, grapes,sweet potatoes, peas, peppers, broccoli, tomatoes, cauliflower, etc.","Do you want personel trainer?"];

		if(this.match('weight loss for woman'))
			return [" most important part is to cut back on sugars and starches, or carbohydrates,your meals should include a protein source, fat source, and low carb vegetables","Foods to eat- whole eggs with the yolk,beans,broccolicauliflower,spinach,tomatoes,cucumber and olive oil,coconut oil for healthy fat","Do you want personel trainer?"];
		
		if(this.match('weight training for woman'))
			return ["This program is meant to improve your strength, muscle size, and conditioning simultaneously. workout is as follows:,1. Warm-Up,2.  Activation Movement For Speed And Mobility,3.Compound Lifts-Squats,Deadlift,Pull-up,Dips,Bench press,Push-up","Rest-Short rest periods (30 seconds) will tax your muscles and your cardiovascular system.","Foods to eat-meats,Eggs,Milk,Oatmeal,Vegetables like broccoli, spinach, potatoes,Bananas","Do you want personel trainer?"];

		if(this.match('weight gain for man'))
			return ["Daily calorie needs range from 2,000 to 3,000 calories for adult men","Carbs 338 to 488 grams, Fat 67 to 117 grams, Protein 75 to 263 grams","Foods to eat- oats, rice, breads, pastas,whole eggsavocados, berries, apples, bananas, pears, oranges, grapes,sweet potatoes, peas, peppers, broccoli, tomatoes, cauliflower, etc.","Do you want personel trainer?"];

		if(this.match('weight loss for man'))
			return [" most important part is to cut back on sugars and starches, or carbohydrates,your meals should include a protein source, fat source, and low carb vegetables.","Foods to eat- whole eggs with the yolk,beans,broccolicauliflower,spinach,tomatoes,cucumber and olive oil,coconut oil for healthy fat","Do you want personel trainer?"];
		
		if(this.match('weight training for man'))
			return ["This program is meant to improve your strength, muscle size, and conditioning simultaneously. workout is as follows:,1. Warm-Up,2.  Activation Movement For Speed And Mobility,3.Compound Lifts-Squats,Deadlift,Pull-up,Dips,Bench press,Push-up","Rest-Short rest periods (30-45 seconds) will tax your muscles and your cardiovascular system.","Foods to eat-meats,Eggs,Milk,Oatmeal,Vegetables like broccoli, spinach, potatoes,Bananas","Do you want personel trainer?"];

		if(this.match('yes') || this.match('Yes'))
			return ["choose 1. Bani J", "2. Guru mann","3. Alpha yash "];

		if(this.match('no') || this.match('No'))
			return ["OK, thanks and best of luck"];

		if(this.match('Bani J') || this.match('bani j') || this.match('BANI J'))
			return "A famous wellness symbol, Bani J always motivates us when it comes to fitness. You can directly contact with her after buying the program";

		if(this.match('Guru mann') || this.match('guru mann') || this.match('GURU MANN'))
			return "The world top fitness specialists, California-based Guru Mann name will feature among the top, he is a professional fitness model certified advance fitness trainer, a nutrition specialist.You can directly contact with him after buying the program";

		if(this.match('Alpha yash') || this.match('alpha yash') || this.match('ALPHA YASH'))
			return "Yash Sharma is a fitness Athlete, Author, Trainer & an Avid Learner.Yash Sharma is deemed as one of the popular influencers in India. Yash Sharma has set the username as @alphayash on Instagram.You can directly contact with him after buying the program. ";
		
		if(this.match('thank you') || this.match('Thank you') || this.match('thanks'))
			return ["Welcome, best of luck", "welcome, I am always available if you any doubt"];
		
		if(this.input == 'noop')
			return;
		
		return input + " what?";
	}
	
	/**
	 * match
	 * 
	 * @param regex - regex string to match
	 * @return boolean - whether or not the input string matches the regex
	 */
	this.match = function(regex) {
	
		return new RegExp(regex).test(this.input);
	}
}
