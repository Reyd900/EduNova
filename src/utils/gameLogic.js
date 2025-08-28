export const generateTutorialSteps = () => {
  return [
    {
      title: "Welcome to EduNova!",
      description: "Let's learn how to use the abacus together.",
      targetValue: null,
      instruction: "This is your virtual abacus. Each rod represents a different place value.",
      highlightRod: null
    },
    {
      title: "Understanding Place Values",
      description: "Each rod represents a decimal place position.",
      targetValue: null,
      instruction: "From right to left: ones, tens, hundreds, thousands, etc.",
      highlightRod: 7
    },
    {
      title: "Heaven Beads (5 points each)",
      description: "The top beads are worth 5 points each.",
      targetValue: 5,
      instruction: "Click the top bead on the rightmost rod to make 5.",
      highlightRod: 7
    },
    {
      title: "Earth Beads (1 point each)",
      description: "The bottom beads are worth 1 point each.",
      targetValue: 3,
      instruction: "Click the bottom beads to make 3. Reset first if needed.",
      highlightRod: 7
    },
    {
      title: "Combining Heaven and Earth",
      description: "Use both types of beads together.",
      targetValue: 8,
      instruction: "Make 8 using one heaven bead (5) and three earth beads (3).",
      highlightRod: 7
    },
    {
      title: "Working with Multiple Digits",
      description: "Use different rods for different place values.",
      targetValue: 23,
      instruction: "Make 23: 2 in the tens place, 3 in the ones place.",
      highlightRod: null
    },
    {
      title: "Congratulations!",
      description: "You've completed the basic tutorial.",
      targetValue: null,
      instruction: "You're ready to explore the other modes. Have fun learning!",
      highlightRod: null
    }
  ];
};

export const checkAnswer = (userValue, targetValue) => {
  return userValue === targetValue;
};

export const calculateScore = (level, timeBonus = 0) => {
  return level * 10 + timeBonus;
};
