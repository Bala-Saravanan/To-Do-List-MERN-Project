import todoModel from "../model/todoModel.js";

const deleteToDo = async (req, res) => {
  try {
    // const { title } = req.body;
    const todo = await todoModel.findOne({ _id: req.params.id });
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "To Do does not exist!",
      });
    }
    const deletedToDo = await todoModel.deleteOne(todo);
    return res.status(200).json({
      success: true,
      message: "To Do deleted Successfully!",
      deletedToDo,
    });
  } catch (error) {
    console.error(`Error deleting To Do ${error.message}`);
    return res.status(500).json({
      success: true,
      message: error.message,
    });
  }
};

export default deleteToDo;
