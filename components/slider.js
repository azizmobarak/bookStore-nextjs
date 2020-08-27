import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import Alert from '@material-ui/lab/Alert';

export default function Slider() {
  return (
    <div className="container py-2">
    <Alert severity="warning">
    Note : choose a book and you will be redirected to our store on amazon
    </Alert>
    <br/>
<AliceCarousel stopAutoPlayOnHover fadeOutAnimation buttonsDisabled dotsDisabled autoPlay autoPlayInterval={5000}>
      <img src="/assets/img/img1.PNG" className="sliderimg"/>
      <img src="/assets/img/img2.PNG" className="sliderimg"/>
      <img src="/assets/img/img3.PNG" className="sliderimg"/>
</AliceCarousel>
<style jsx>
{`
div{
    hight:300px;
}
.sliderimg{
    width: 100%;
    height: 500px;
    object-fit: cover;
}

`}
</style>
    </div>
  );
}
