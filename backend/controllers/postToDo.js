import todoModel from "../model/todoModel.js";

const postToDo = async (req, res) => {
  try {
    const { title, description, status } = req.body;

    const exists = await todoModel.findOne({ title });
    if (exists) {
      return res.status(400).json({
        success: false,
        message: "To Do already exists!",
      });
    }

    const newToDo = new todoModel({
      user: req.user.id,
      title,
      description,
      status: status || false,
    });

    const toDo = await newToDo.save();

    return res.status(201).json({
      success: true,
      message: "New To Do Added!",
      toDo,
    });
  } catch (error) {
    console.error(`Error posting ToDo ${error.message}`);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default postToDo;
