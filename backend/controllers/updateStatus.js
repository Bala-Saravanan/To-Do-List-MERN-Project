import todoModel from "../model/todoModel.js";

const updateStatus = async (req, res) => {
  try {
    // const { title, status } = req.body;
    const todo = await todoModel.findOne({ _id: req.params.id });
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "To Do does not exist!",
      });
    }
    const updatedToDo = await todoModel.updateOne(todo, {
      status: !todo.status,
    });
    return res.status(200).json({
      success: true,
      message: "status updated!",
      updatedToDo,
    });
  } catch (error) {
    console.error(`Error updating status: ${error.message}`);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default updateStatus;
