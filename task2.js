db.users.insertMany([
    {
      "user-id": 1,
      "name": "user1",
      "email": "user1@gmail.com",
      "mentor-id": 1,
    },
    {
      "user-id": 2,
      "name": "user2",
      "email": "user2@gmail.com",
      "mentor-id": 1,
    },
    {
      "user-id": 3,
      "name": "user3",
      "email": "user3@gmail.com",
     " mentor-id": 1,
    },
    {
      "user-id": 4,
      "name": "user4",
      "email": "user4@gmail.com",
      "mentor-id": 2,
    },
    {
      "user-id": 5,
      "name": "user5",
      "email": "user5@gmail.com",
      "mentor-id": 2,
    },
  ]);
  // inserting documents inside the code-kata collection
  db.codekata.insertMany([
    {
      "user-id": 1,
      "no_of_problems_solved": 10,
    },
    {
      "user-id": 2,
      "no_of_problems_solved": 20,
    },
    {
      "user-id": 3,
      "no_of_problems_solved": 30,
    },
    {
      "user-id": 4,
      "no_of_problems_solved": 40,
    },
    {
      "user-id": 5,
      "no_of_problems_solved": 50,
    },
  ]);
  
  // inserting documents inside the attendance collection
  
  db.attendance.insertMany([
    {
      "user-id": 1,
      "topic_id": 1,
      "present": true,
    },
    {
      "user-id": 2,
      "topic_id": 2,
     "present": true,
    },
    {
      "user-id": 3,
      "topic_id": 3,
      "present": false,
    },
    {
      "user-id": 4,
      "topic_id": 4,
      "present": false,
    },
    {
      "user-id": 5,
      "topic_id": 5,
      "present": false,
    },
  ]);
  
  // inserting documents inside the topics collection
  db.topics.insertMany([
    {
      "topic_id": 1,
      "topic": "HTML",
      "topic_date": new Date("2022-10-01"),
    },
    {
      "topic_id": 2,
      "topic": "CSS",
      "topic_date": new Date("2022-10-10"),
    },
    {
      "topic_id": 3,
      "topic": "Javascript",
      "topic_date": new Date("2022-10-15"),
    },
    {
      "topic_id": 4,
      "topic": "React",
      "topic_date": new Date("2022-10-20"),
    },
    {
      "topic_id": 5,
      "topic": "NodeJs",
      "topic_date": new Date("2022-10-25"),
    },
  ]);
  
  // inserting documents inside the tasks collection
  db.tasks.insertMany([
    {
      "task_id": 1,
      'topic_id': 1,
      "user-id": 1,
      "task": "HTML task",
      "due_date": new Date("2022-10-05"),
      "submitted": true,
    },
    {
      "task_id": 2,
      'topic_id': 2,
      "user-id": 2,
      "task": "CSS task",
      "due_date": new Date("2022-10-15"),
      "submitted": true,
    },
    {
      "task_id": 3,
      "topic_id": 3,
      "user-id": 3,
      "task": "Javascript task",
      "due_date": new Date("2022-10-20"),
      "submitted": false,
    },
    {
      "task_id": 4,
      "topic_id": 4,
      "user-id": 4,
      "task": "React task",
      "due_date": new Date("2022-10-25"),
      "submitted": false,
    },
    {
      "task_id": 5,
      "topic_id": 5,
      "user-id": 5,
      "task": "Node task",
      "due_date": new Date("2022-10-30"),
      'submitted': false,
    },
  ]);
  
  // inserting documents inside the companydrives collection
  db.company_drives.insertMany([
    {
      "user-id": 1,
      "drive_date": new Date("2022-10-05"),
      "company_name": "Google",
    },
    {
      "user-id": 1,
      "drive_date": new Date("2022-10-10"),
      "company_name": "HCL",
    },
    {
      "user-id": 2,
      "drive_date": new Date("2022-10-20"),
      "company_name": "Zoho",
    },
    {
      "user-id": 3,
      "drive_date": new Date("2022-10-15"),
      "company_name": "Infosys",
    },
    {
      "user-id": 4,
      "drive_date": new Date("2022-10-30"),
      "company_name": "Accenture",
    },
  ]);
  
  // inserting documents inside the mentors collection
  db.mentors.insertMany([
    {
      "mentor-id": 1,
      "mentor_name": "mentor1",
      "mentor_email": "mentor1@gmail.com",
    },
    {
      "mentor-id": 2,
      "mentor_name": "mentor2",
      "mentor_email": "mentor2@gmail.com",
    },
    {
      "mentor-id": 3,
      "mentor_name": "mentor3",
      "mentor_email": "mentor3@gmail.com",
    },
    {
      "mentor-id": 4,
      "mentor_name": "mentor4",
      "mentor_email": "mentor4@gmail.com",
    },
    {
      "mentor-id": 5,
      "mentor_name": "mentor5",
      "mentor_email": "mentor5@gmail.com",
    },
  ]);
  //1. Find all the topics and tasks which are thought in the month of Octobern;
  db.topics
  .find({
    $and: [
      { topic_date: { $gte: new Date("2022-10-01") } },
      { topic_date: { $lte: new Date("2022-10-31") } },
    ],
  })
// {
//   _id: ObjectId("64c387a2c5a801961e8f4923"),
//   topic_id: 1,
//   topic: 'HTML',
//   topic_date: 2022-10-01T00:00:00.000Z
// }
// {
//   _id: ObjectId("64c387a2c5a801961e8f4924"),
//   topic_id: 2,
//   topic: 'CSS',
//   topic_date: 2022-10-10T00:00:00.000Z
// }
// {
//   _id: ObjectId("64c387a2c5a801961e8f4925"),
//   topic_id: 3,
//   topic: 'Javascript',
//   topic_date: 2022-10-15T00:00:00.000Z
// }
// {
//   _id: ObjectId("64c387a2c5a801961e8f4926"),
//   topic_id: 4,
//   topic: 'React',
//   topic_date: 2022-10-20T00:00:00.000Z
// }
// {
//   _id: ObjectId("64c387a2c5a801961e8f4927"),
//   topic_id: 5,
//   topic: 'NodeJs',
//   topic_date: 2022-10-25T00:00:00.000Z
// }
db.tasks
  .find({
    $and: [
      { due_date: { $gte: new Date("2022-10-01") } },
      { due_date: { $lte: new Date("2022-10-31") } },
    ],
  })
// {
//   _id: ObjectId("64c387d8c5a801961e8f4928"),
//   task_id: 1,
//   topic_id: 1,
//   'user-id': 1,
//   task: 'HTML task',
//   due_date: 2022-10-05T00:00:00.000Z,
//   submitted: true
// }
// {
//   _id: ObjectId("64c387d8c5a801961e8f4929"),
//   task_id: 2,
//   topic_id: 2,
//   'user-id': 2,
//   task: 'CSS task',
//   due_date: 2022-10-15T00:00:00.000Z,
//   submitted: true
// }
// {
//   _id: ObjectId("64c387d8c5a801961e8f492a"),
//   task_id: 3,
//   topic_id: 3,
//   'user-id': 3,
//   task: 'Javascript task',
//   due_date: 2022-10-20T00:00:00.000Z,
//   submitted: false
// }
// {
//   _id: ObjectId("64c387d8c5a801961e8f492b"),
//   task_id: 4,
//   topic_id: 4,
//   'user-id': 4,
//   task: 'React task',
//   due_date: 2022-10-25T00:00:00.000Z,
//   submitted: false
// }
// {
//   _id: ObjectId("64c387d8c5a801961e8f492c"),
//   task_id: 5,
//   topic_id: 5,
//   'user-id': 5,
//   task: 'Node task',
//   due_date: 2022-10-30T00:00:00.000Z,
//   submitted: false
// }
//2. Find all the company drives which appeared between 15 oct-2022 and 31-oct-2022
db.company_drives
  .find({
    $and: [
      { drive_date: { $lte: new Date("2022-10-31") } },
      { drive_date: { $gte: new Date("2022-10-15") } },
    ],
  })
// {
//   _id: ObjectId("64c387f6c5a801961e8f492f"),
//   'user-id': 2,
//   drive_date: 2022-10-20T00:00:00.000Z,
//   company_name: 'Zoho'
// }
// {
//   _id: ObjectId("64c387f6c5a801961e8f4930"),
//   'user-id': 3,
//   drive_date: 2022-10-15T00:00:00.000Z,
//   company_name: 'Infosys'
// }
// {
//   _id: ObjectId("64c387f6c5a801961e8f4931"),
//   'user-id': 4,
//   drive_date: 2022-10-30T00:00:00.000Z,
//   company_name: 'Accenture'
// }
//3. Find all the company drives and students who are appeared for the placement.

db.users
  .aggregate([
    {
      $lookup: {
        from: "company_drives",
        localField: "user-id",
        foreignField: "user-id",
        as: "company_drives",
      },
    },
    { $project: { "company_drives.drive_date": 1 } },
  ])
// {
//   _id: ObjectId("64c386cdc5a801961e8f4914"),
//   company_drives: [
//     {
//       drive_date: 2022-10-05T00:00:00.000Z
//     },
//     {
//       drive_date: 2022-10-10T00:00:00.000Z
//     }
//   ]
// }
// {
//   _id: ObjectId("64c386cdc5a801961e8f4915"),
//   company_drives: [
//     {
//       drive_date: 2022-10-20T00:00:00.000Z
//     }
//   ]
// }
// {
//   _id: ObjectId("64c386cdc5a801961e8f4916"),
//   company_drives: [
//     {
//       drive_date: 2022-10-15T00:00:00.000Z
//     }
//   ]
// }
// {
//   _id: ObjectId("64c386cdc5a801961e8f4917"),
//   company_drives: [
//     {
//       drive_date: 2022-10-30T00:00:00.000Z
//     }
//   ]
// }
// {
//   _id: ObjectId("64c386cdc5a801961e8f4918"),
//   company_drives: []
// }
// 4.Find the number of problems solved by the user in codekata
db.codekata.find()
// {
//   _id: ObjectId("64c38768c5a801961e8f4919"),
//   'user-id': 1,
//   no_of_problems_solved: 10
// }
// {
//   _id: ObjectId("64c38768c5a801961e8f491a"),
//   'user-id': 2,
//   no_of_problems_solved: 20
// }
// {
//   _id: ObjectId("64c38768c5a801961e8f491b"),
//   'user-id': 3,
//   no_of_problems_solved: 30
// }
// {
//   _id: ObjectId("64c38768c5a801961e8f491c"),
//   'user-id': 4,
//   no_of_problems_solved: 40
// }
// {
//   _id: ObjectId("64c38768c5a801961e8f491d"),
//   'user-id': 5,
//   no_of_problems_solved: 50
// }

//5. Find all the mentors with who has the mentee's count more than 15
db.users
  .aggregate([
    {
      $lookup: {
        from: "mentors",
        localField: "mentor-id",
        foreignField: "mentor-id",
        as: "mentors",
      },
    },
    { $group: { _id: "$mentor-id", mentor_count: { $count: {} } } },
    { $project: { mentor_count: 1, _id: 0 } },
    { $match: { mentor_count: { $gt: 15 } } },
  ])
 0
 //6. Find the number of users who are absent and task is not submitted  between 15 oct-2022 and 31-oct-2022

 db.tasks
  .aggregate([
    {
      $lookup: {
        from: "attendance",
        localField: "userid",
        foreignField: "userid",
        as: "attendance",
      },
    },
    {
      $match: {
        $and: [{ submitted: false }, { "attendance.attended": false }],
      },
    },
  ])












