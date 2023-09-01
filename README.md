# Tennis Refactoring Kata

Imagine you work for a consultancy company, and one of your colleagues has been doing some work for the Tennis Society.
The contract is for 10 hours billable work, and your colleague has spent 9 hours working on it.
Unfortunately he has now fallen ill.
He says he has completed the work, and the tests all pass.
Your boss has asked you to take over from him.
She wants you to spend an hour or so on the code so she can bill the client for the full 10 hours.
She instructs you to tidy up the code a little and perhaps make some notes so you can give your colleague some feedback on his chosen design.
You should also prepare to talk to your boss about the value of this refactoring work, over and above the extra billable hours.

The test suite provided is fairly comprehensive, and fast to run.
You should not need to change the tests, only run them often as you refactor.

There is a deliberate error in several of the implementations - the player names are hard-coded to "player1" and "player2".
After you refactor, you may want to fix this problem and add suitable test cases to prove your fix works.

# Tennis

Tennis has a rather quirky scoring system, and to newcomers it can be a little difficult to keep track of.
The tennis society has contracted you to build a scoreboard to display the current score during tennis games.

You can read more about Tennis scores on wikipedia which is summarized below:

1. A game is won by the first player to have won at least four points in total and at least two points more than the opponent.
2. The running score of each game is described in a manner peculiar to tennis: scores from zero to three points are described as “Love”, “Fifteen”, “Thirty”, and “Forty” respectively.
3. If at least three points have been scored by each player, and the scores are equal, the score is “Deuce”.
4. If at least three points have been scored by each side and a player has one more point than his opponent, the score of the game is “Advantage” for the player in the lead.

You need only report the score for the current game. Sets and Matches are out of scope.

## Questions to discuss afterwards

* How did it feel to work with such fast, comprehensive tests?
* Did you make mistakes while refactoring that were caught by the tests?
* If you used a tool to record your test runs, review it. Could you have taken smaller steps? Made fewer refactoring mistakes?
* Did you ever make any refactoring mistakes and then back out your changes? How did it feel to throw away code?
* What would you say to your colleague if they had written this code?
* What would you say to your boss about the value of this refactoring work? Was there more reason to do it over and above the extra billable hour or so?