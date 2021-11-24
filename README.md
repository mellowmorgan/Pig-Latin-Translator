## Tests
Describe: translator()

Test: "It should return vowel + "way" if input is a vowel."
Code:
const text = "a";
translator(word);
Expected Output: "away"

Test: "It should return translated word with consonant moved to the orignal word's end + "ay."
Code:
const text = "cat";
translator(word);
Expected Output: "atcay"

Test: For words beginning with one or more consonants it should return translated word with consonants moved to the end + "ay".
Code:
const text = "street";
translator(word);
Expected Output: "eetstray"

Test: For words beginning with one or more consonants or "qu" it should return translated word with consonants (or "qu") moved to the end + "ay".
Code:
const text = "quack";
translator(word);
Expected Output: "ackquay"



# Pig Latin Translator

#### By Morgan Waites and Karen Axon

#### Webpage translates chunk of text entered into pig latin.

## Technologies Used

* Javascript
* HTML/CSS
* Bootstrap

## Setup/Installation Requirements

* git clone this repository onto desktop
* navigate to top-level of directory
* open index.html

## License

[MIT](https://opensource.org/licenses/MIT)


Copyright (c) 2021 Morgan Waites and Karen Axon