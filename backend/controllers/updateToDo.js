import todoModel from "../model/todoModel.js";

const updateToDo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const todo = await todoModel.findOne({ _id: req.params.id });
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "To Do not Exist!",
      });
    }
    const updatedTodo = await todoModel.updateOne(todo, { title, description });
    return res.status(200).json({
      success: true,
      message: "To Do Updated!",
      updatedTodo,
    });
  } catch (error) {
    console.error(`Error updating To Do ${error.message}`);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default updateToDo;
