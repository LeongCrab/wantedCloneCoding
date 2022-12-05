// 스크롤 이벤트
{
    let jobProcess = document.querySelector(".jobProcessCnt");
    window.onload =()=>{
        jobProcess.style.top = "70px";
    }
    window.addEventListener("scroll", () => {
        let ribbonBanner = document.querySelector(".ribbonBannerCnt");
        let jobAssociated = document.querySelector(".jobAssociated");
        ribbonBanner.style.visibility = "visible";
        if(window.scrollY == 0)
            ribbonBanner.style.visibility = "hidden";
        else if(window.scrollY + window.innerHeight >= jobAssociated.offsetTop){
            jobProcess.style.position = "absolute";
            jobProcess.style.bottom = "0";
            jobProcess.style.removeProperty("top");
        }
        else{
            jobProcess.style.position = "fixed";
            jobProcess.style.top = "70px";
            jobProcess.style.removeProperty("bottom ");
        }
    });
}

//  이미지 슬라이드 버튼
{
    let slides = document.querySelector('.jobImage_slides');
    let leftBtn = document.querySelector('.jobImage_arrow_left');
    let rightBtn = document.querySelector('.jobImage_arrow_right');

    const slide = document.querySelectorAll('.jobImage_slide');
    let slide_idx = 0;
    leftBtn.addEventListener('click', () => {
        slide_idx -= 1;
        if (slide_idx >= 0)
            slides.scrollTo({left: slide[slide_idx].offsetLeft, behavior: 'smooth'});
        else
            slide_idx += 1;
    });
    rightBtn.addEventListener('click', () => {
        slide_idx += 1;
        if (slide_idx < slide.length)
            slides.scrollTo({left: slide[slide_idx].offsetLeft, behavior: 'smooth'});
        else
            slide_idx -= 1;
    });
}

// 경고창 버튼
{
    let moreBtn = document.querySelector(".btn-open");
    let warningBody = document.querySelector(".warning_body");
    let opened = false;
    moreBtn.addEventListener('click', () =>{
        if(opened){
            moreBtn.innerHTML = "V";
            opened = false;
            warningBody.style.display = 'none';
        }
        else{
            moreBtn.innerHTML = "ㅅ";
            opened = true;
            warningBody.style.display = 'block';
        }
    });
}
