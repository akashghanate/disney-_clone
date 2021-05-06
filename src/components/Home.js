import styled from 'styled-components';
import config from '../config';
import ImgSlider from './ImgSlider';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Recommands from './Recommands';
import Trending from './Trending';
import Viewers from './Viewers';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import db from '../firebase';
import {setMovies} from '../features/movie/movieSlice';
import {selectUserName} from '../features/user/userSlice';

const bgImg = config.baseURl+'/images/home-background.png';

const Home = (props) => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let recommand = [];
    let newDisney = [];
    let original = [];
    let trending = [];

    useEffect(() => {
        db.collection('movies').onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                switch (doc.data().type) {
                    case 'recommend':
                        recommand = [...recommand,{id: doc.id, ...doc.data()}]
                        // console.log(recommand);
                        break;
                    case 'new':
                        newDisney = [...newDisney,{id: doc.id, ...doc.data()}]
                        break;
                    case 'original':
                        original = [...original,{id: doc.id, ...doc.data()}]
                        break;
                    case 'trending':
                        trending = [...trending,{id: doc.id, ...doc.data()}]
                        break;
                    default:
                        break;
                }
            });
            
            dispatch(setMovies({
                recommand: recommand,
                newDisney: newDisney,
                original: original,
                trending: trending,
            }));
        });
            
    }, [userName])
    return(
        <Container>
            <ImgSlider />
            <Viewers/>
            <Recommands/>
            <NewDisney/>
            <Originals />
            <Trending />
        </Container>
    )
};

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
    
    &:after{
        background: url(${bgImg}) center center / cover no-repeat fixed;
        content: '';
        position: absolute; 
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
`;

export default Home;