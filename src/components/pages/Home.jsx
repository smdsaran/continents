import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchContinents } from '../../redux-slice/continentsSlice';
import ContinentsGridList from '../ContinentsGridList';
import LoadMoreBtn from '../LoadMoreBtn';
import { Container } from 'react-bootstrap';
import HighlightSection from '../HighlightSection';
import Footer from '../Footer';
import SocialIcons from '../SocialAccount';
import NavBar from '../NavBar';
import WelcomeHeader from '../WelcomeHeader';

const ITEMS_PER_PAGE = 12;

const Home = () => {
  const dispatch = useDispatch();
  const { continentLists, filter, itemsCount } = useSelector(state => state.continents);
  const [visibleCount, setVisibleCount] = useState(itemsCount);
  const filteredContinents = continentLists?.filter(continent => continent?.region === filter);
  const visibleContinents = filter === "All"  ? continentLists.slice(0, visibleCount) : filteredContinents?.slice(0, visibleCount);


  useEffect(() => {
      dispatch(fetchContinents());
  }, []);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + ITEMS_PER_PAGE);
  };

  return (
    <Container fluid='lg' className='w-100 px-4'>
        <NavBar />
        <WelcomeHeader />
        <HighlightSection />
        <ContinentsGridList continentLists={visibleContinents}/>
        {filter === "All" && visibleContinents && visibleContinents?.length < continentLists?.length && 
        <LoadMoreBtn onClickHandler={handleLoadMore}/>}
        {filter !== "All" && visibleContinents && visibleCount < filteredContinents?.length && 
        <LoadMoreBtn onClickHandler={handleLoadMore}/>}
        <SocialIcons />
        <Footer />
        <div style={{ height: '200px' }}></div>
    </Container>
  )
}

export default Home;