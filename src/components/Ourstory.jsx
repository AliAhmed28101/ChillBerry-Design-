import React from 'react'

const Ourstory = () => {
  return (
    <div className='maincontainer relative w-full h-full flex '>

      <div className='lefty flex flex-col '>
        <div className='cone py-24'>
          <img
            className='w-65 h-65 object-contain -translate-x-2.5'
            src="/images/section2/cone.png"
            alt=""
          />

          <div className='righttextbox px-40 pr-0'>
            <h2 className='font-Schotis-Bold tracking-wider text-lg'>
              About Chill Berry
            </h2>

            <p className='text-gray-500 text-sm font-Mazzard-Regular py-3'>
              At Frosty Whirl, ice cream is more than just <br />
              dessert — it's a celebration of flavor, creativity, <br />
              and childhood joy. What started as a small local <br />
              dream has grown into a delightful brand known <br />
              for handcrafted scoops, real ingrediants, and <br />
              unforgettable taste
            </p>
          </div>
        </div>
      </div>

      <div className='mid flex flex-col py-16 items-center px-8 mr-0 pr-7  justify-center '>
        <div className='textbox'>
          <span className='px-26 pr-0 py-20 pb-0'>
            <p className='font-Mazzard-Regular text-sharp-pink text-sm text-center'>
              OUR STORY
            </p>

            <div className='py-3.5'>
              <span className='font-Schotis-Bold text-3xl tracking-wide'>
                <h5 className='px-8'>The Flavor</h5>
                <h5>Behind the Fun</h5>
              </span>
            </div>
          </span>
        </div>

        <div className="midimgcontainer py-24 flex items-center justify-center">
          <div className="pinkoutline bg-gradient-to-t from-sharp-pink from-0% to-white to-85% p-[3px] rounded-b-[131px]">
            <div className="whitecenter bg-white p-[10px] rounded-b-[124px]">
              <div className="pinkbox relative flex items-center justify-center w-[250px] h-[270px] bg-gradient-to-t from-sharp-pink from-0% to-white to-85% px-30 py-30 rounded-b-[120px]">
                <div className="absolute bottom-6 w-[380px] px-10">
                  <img
                    src="/images/section2/mid.png"
                    alt=""
                    className="w-max h-78 drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>





      <div className='Righty py-70 px-14 pr-0 relative pb-0  pl-0'>
        <h2 className='font-Schotis-Bold tracking-wider text-lg'>
          Joy in Every Scoop
        </h2>

        <p className='text-gray-500 text-sm font-Mazzard-Regular py-3'>
          At Frosty Whirl, we believe every scoop should be a <br />
          moment of joy. Crafted with care and a whole lot<br />
          of love, our ice creams are made to bring smiles<br />
          to every face
        </p>

        <div className='points flex flex-col gap-2'>
          <span className='flex items-center gap-2'>
            <img className='h-5.5 w-5.5 rounded-full' src="checkbox.svg" alt="" />
            <p className='font-Mazzard-Regular text-gray-900 text-sm'>
              Made with real, fresh ingredients
            </p>
          </span>

          <span className='flex items-center gap-2'>
            <img className='h-5.5 w-5.5 rounded-full' src="checkbox.svg" alt="" />
            <p className='font-Mazzard-Regular text-gray-900 text-sm'>
              Always small-batch and handcrafted
            </p>
          </span>

          <span className='flex items-center gap-2'>
            <img className='h-5.5 w-5.5 rounded-full' src="checkbox.svg" alt="" />
            <p className='font-Mazzard-Regular text-gray-900 text-sm'>
              No artificial flavors or preservatives
            </p>
          </span>
        </div>

        <div className='button py-8 flex'>
          <button type="button" onClick={() => alert("Order Now")} className=" flex items-center justify-center gap-1 font-Mazzard-Regular text-white text-sm bg-sharp-pink px-6 py-2.5 rounded-4xl hover:cursor-pointer">
            Order Now

            <img className="h-3 invert" src="next.svg" alt="next" />

          </button>


        </div>
      </div>

      <div className='rightbottimg absolute  right-0 py-108 mb-0 pb-0 mt-0 '>
        <img
          className='h-65 w-65 object-contain'
          src="/images/section2/righty.png"
          alt=""
        />
      </div>

    </div>
  )
}

export default Ourstory
