import todoModel from "../model/todoModel.js";

const getAllToDo = async (req, res) => {
  try {
    const userId = req.user.id; // Get the user ID from the request
    const todos = await todoModel
      .find({ user: userId })
      .sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      todos,
    });
  } catch (error) {
    console.error(`Error getting ToDos ${error.message}`);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default getAllToDo;
