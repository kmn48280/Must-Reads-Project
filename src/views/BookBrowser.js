import AllBooks from '../components/ReadingList/AllBooks';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function BookBrowser(){

    return (
        <>
            <Typography variant='h3'>Kris' MustReads</Typography>
            <Box sx={{ display: 'flex', alignContent:'center', justifyContent:'center', width:'100%', mb:2 }}>
                <AllBooks />
            </Box>
        </>
    )
};
