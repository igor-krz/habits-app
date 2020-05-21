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

router.get("/completed/:habitid", (req, res, next) => {
  Habits.Habitcomplete(req.params.habitid)
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

router.put('addtime/:habitId', (req, res, next) => {
  if(req.body.hasOwnProperty('complete'))  {
    Habits.HabitCompleteUpdate(req.params.habitId, req.body.complete)
    .then(function() {
        res.status(200).json({message:'date sent!'});
    })
    .catch(function(error){
        next(error);
    });
    
  } else {
     return res.status(422).json({
        error: "You can only update complete column"
     });
  }
  
});

router.put('addStrike/:habitId', (req, res, next) => {
  if(req.body.hasOwnProperty('current_strike') || req.body.hasOwnProperty('highest_strike'))  {
    Habits.HabitUpdate(req.params.habitId, req.body)
  .then(function() {
      res.status(200).json({message:'strikes updated!'});
  })
  .catch(function(error){
      next(error);
  });
  } else {
    return res.status(422).json({
      error: "You can only update current strike and highest strike column"
   });
  }

});

router.delete('/deletehabit',(req,res,next)=>{
    const habitId=req.body.habit_id;
    console.log(req.body)
    Habits.deleteHabit( habitId)
    .then(res.send('Delete successful!'))
    .catch(error => {
        console.log(error);
        res.status(500).json({message: "cannot delete habits"})
    });
})


module.exports = router;