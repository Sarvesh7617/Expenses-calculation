import {app} from "./app.js";


app.listen(process.env.PORT || 4000,()=>{
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})