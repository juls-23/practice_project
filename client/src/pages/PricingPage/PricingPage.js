import React from 'react';
import { connect } from 'react-redux';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Pricing from '../../components/Pricing/Pricing';
import Spinner from '../../components/Spinner/Spinner';


const Pricingpage = (props) => {
  const { isFetching } = props;
  return (
    <>
      <Header />
     { isFetching ? <Spinner />: <Pricing />}
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => {
  const { isFetching } = state.userStore;
  return { isFetching };
};


export default connect(mapStateToProps)(Pricingpage);



