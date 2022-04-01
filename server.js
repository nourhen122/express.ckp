const express = require('express');


const app = express();

const date = (req, res, next) => {
    	const d  = new Date()
        
        console.log(d.getDay())
        const da = d.getDate() ;
        const ho = d.getHours() ;
        const yes = false ;
         if (da > 0 && da <6 && ho <17 && ho >9 )
         {
            next()
         }
         else res.send('unlucky')
     };

app.use(date)

app.use(express.static('public'));
const PORT = 3000;
app.listen(PORT, (err) => (err ? console.log(err) : console.log(`server is running on port ${PORT}`)));