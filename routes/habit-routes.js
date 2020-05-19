const express = require("express");
const router = express.Router();
const Habits = require("../habitdb/queries");

router.get("/:userid", (req, res, next) => {
  Habits.getUserHabits(req.params.userid)
    .then(function (showHabits) {
      res.status(200).json(showHabits);
    })
    .catch((error) => {
      res.status(500).json({ message: "cannot retrieve user habits" });
    });
});


router.post("/newhabit", (req, res, next) => {
  const habit = req.body;
  Habits.addHabit(habit)
    .then((habit) => {
      res.status(200).json(habit);
    })

    // .then((id) => {
    //     return Habits.getUserHabits(id);
    // })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "cannot post habits" });
    });
});


router.delete('/deletehabit',(req,res,next)=>{
    const userId=req.body.userId;
    const habitId=req.body.habit_id;
    console.log(req.body)
    Habits.deleteHabit(userId, habitId)
    .then(res.send('Delete successful!'))
    .catch(error => {
        console.log(error);
        res.status(500).json({message: "cannot delete habits"})
    });
})


module.exports = router;
