const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Goals" });
});

//@desc set goal
//@route POST /api/goals
//@access Private
const postGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    console.log("no text");
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "Set Goals" });
});

const updateGoal = asyncHandler(async (req, res, id) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

const deleteGoal = asyncHandler(async (req, res, id) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = { getGoals, postGoal, updateGoal, deleteGoal };
