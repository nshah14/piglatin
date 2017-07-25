import { Component, OnInit } from '@angular/core';
import { PigLatinService } from "../../services/piglatin.service";

import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

import { AppHomeService } from '../../services/app-home.service';

@Component({
	selector: 'about',
	templateUrl: 'app/components/piglatin/piglatin.component.html',
	styleUrls: ['app/components/piglatin/piglatin.component.css']
})

export class PigLatinComponent implements OnInit {
	public buildNumber = "null";
	data: any;
	options: any;
	words = [];
	word = '';
	ngOnInit() {
	}
	constructor() {
	}

	tokenizer(sentence) {
		var array = sentence.split(' ');
		console.log("sentence into words" + array)
		return array;
	}
	/**
	 * Convert from a word to pig altin format.
	 * @param form 
	 */
	convert(form) {
		console.log("form " + form);
		console.log("word " + form.word);
		var sentence = form.word;

		var outSentence=" ";
		for (let token of this.tokenizer(sentence)) {
			outSentence = outSentence+this.translate(token);
			console.log('token :: '+ outSentence);
		}
		console.log('outSentence :: '+ outSentence);
		if (this.words.length > 1) {
			console.log('this is '+this.words.indexOf(this.words));
			this.words.splice(this.words.indexOf(this.words), 1);
		}

		this.words.push(outSentence);
		this.word = null;
	}


	/**
	 *  check if its in Array of values
	 * @param vowels 
	 * @param letter 
	 */

	isInArray(vowels, letter) {

		return vowels.indexOf(letter.toLowerCase()) > -1;
	}
	/**
	 * 
	 * @param word Translate from a word to piglatin format
	 */
	translate(word) {
		console.log('in Translate)');
		var array = word.split('');
		var vowels = ['a', 'e', 'i', 'o', 'u'];
		var newWord = '';
		var suffix = "ay ";
		if (this.isInArray(vowels, word.charAt(0))) {
			suffix = "i ";
		}
		console.log(word.substr(1) + word.charAt(0) + suffix);
		return word.substr(1) + word.charAt(0) + suffix;
	}

}
