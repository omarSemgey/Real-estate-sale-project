import './Options.css'
export default function Options(){
    function handleDisplay(e){
        const id=e.target.id;
        const text=document.querySelectorAll('.option-text');
        const header=document.querySelectorAll('.option-header');
        console.log(document.getElementById(id).style.color);
        if(document.getElementById(id).style.color === 'rgb(243, 85, 37)'){
            text.forEach((e) =>{e.style.display='none'});
            header.forEach((e) =>{e.style.color='black'});
        }else{
            text.forEach((e) =>{e.style.display='none'});
            header.forEach((e) =>{e.style.color='black'});
            document.getElementById(id).style.color='#f35525';
            document.getElementsByClassName(id)[0].children[0].style.display='block';
            document.getElementById(id).style.color='#f35525';
            document.getElementsByClassName(id)[0].children[0].style.display='block';
        }
    }
    return(
        <>
        <div className='multi-options'>
            <div className='options'>
                <div className='option'>
                    <h4 onClick={(e) => handleDisplay(e)} id='1' className='option-header'>Best useful links?</h4>
                    <div className='option-content 1'>
                        <div className='option-text'>
                        Get
                        <strong> the best villa </strong>
                        website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the
                        <a style={{'color':'blue'}} href="https://www.google.com/search?q=best+free+css+templates"> best free CSS templates </a>
                        in the world. Please tell your friends about it.
                        </div>
                    </div>
                </div>
                <div className='option'>
                    <h4 onClick={(e) => handleDisplay(e)} id='2' className='option-header'>How does this work?</h4>
                <div className='option-content 2'>
                        <div className='option-text'>
                        Dolor 
                        <strong> almesit amet </strong>
                        consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur
                        <code style={{'color':'red'}}> adipiscing </code>
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </div>
                </div>
                <div className='option'>
                    <h4 onClick={(e) => handleDisplay(e)} id='3' className='option-header'>Why is Villa Agency the best?</h4>
                    <div className='option-content 3'>
                        <div className='option-text'>
                            Dolor 
                            <strong> almesit amet </strong>
                            consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur
                            <code style={{'color':'red'}}> adipiscing </code>
                            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}