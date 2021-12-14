const express=require("express");
const router=new express.Router();
const path=require("path");
const authcontroller=require('../controller/authcontroller')
const usercontroller=require('../controller/usercontroller'); 
// const {fetchuser}=require("../middleware/fetchuser");   //middleware
const upload=require("../middleware/uploadfile");  //middleware for file upload
const updatePic=require("../middleware/updateprofilepic");  //middleware for dp update

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/../../dist/dream-app/index.html'));
})
//auth routes---------------------
router.post('/api/signup',authcontroller.signup);
router.post('/api/signin',authcontroller.signin);
// router.post('/api/index',fetchuser,controller.index);
// -------------------------


router.get('/api/userprofile',usercontroller.userprofile);
router.get('/api/ownposts',usercontroller.user_own_posts);
// router.post('/api/userpost',upload.single('file'),usercontroller.user_post);
router.post('/api/userpost',upload.single('file'),usercontroller.user_post);
router.get('/api/fetchallposts',usercontroller.fetch_all_posts);
router.post('/api/updateprofilepic',updatePic.single('file'),usercontroller.update_profile_pic);
router.get('/api/usernamelist',usercontroller.user_name_list);
//notes routes------------------------
/*
router.get('/api/fetchallnotes',controller.notes_get);
router.post('/api/addnotes',fetchuser,controller.add_notes);
router.put('/api/updatenote/:id',fetchuser,controller.update_note);
router.delete('/api/deletenote/:id',fetchuser,controller.delete_note);*/

//------------------------



module.exports=router;