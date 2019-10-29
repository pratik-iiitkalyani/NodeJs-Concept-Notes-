const Multer = require('multer');
const imageUpload = Multer({dest : "./upload"})

const store = Multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, './upload');
    },
    filename:function(req,file,cb){
        cb(null, Date.now()+'.'+file.originalname);
    }
});

Router.route('/upload')
        .post(async function(req, res) {
            // console.log("file upload sucess")
            imageUpload(req, res, function(err) {
                if (err) {
                    return res.status().json({ error: err });
                }
                //do all database record saving activity
                return res.json({ originalname: req.file.originalname, uploadname: req.file.filename });
            });
        })
