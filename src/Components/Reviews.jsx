import user from '../assets/icons/user.png'
import { useEffect, useRef, useState } from 'react'

const Reviews = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [showReadMoreButton, setReadMoreButton]= useState(false);

    const ref=useRef(null);

    useEffect(()=>{
        if(ref.current){
            setReadMoreButton(ref.current.scrollHeight != ref.current.clientHeight)

        }
    },[])

    const reviews = [
        {
            name: 'Lisa',
            date: 'Jun 30 2024',
            title: 'ragggggggggggggggggg!',
            content: `I ordered this hat and time as it was I believe that the world was ending and the shit
            was thefkldjsklf slkfdjsd lfskdj fsldkf sdljkf jsdlkfj dslf jsdlkfj sdlkf sdjlf jsdlkf jsdlkfj sdl
            sdfjkjdsklf jdslkf jdslkfj dslkfjsd fl jkdfjlksd fjlkds fjldskfj ldskfj dslkfj dslkfj sdlkf jdslkf jdslkf 
            jfklsdj flksdj flksdjf dlskfj dslkfj sdlkfdsj Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat repellendus quaerat corporis debitis quis iste, enim sunt itaque veniam, molestiae id reiciendis voluptate natus consectetur magni aperiam? Dicta, ad voluptatibus?
            Beatae expedita dicta perferendis suscipit corrupti officiis nam, reprehenderit quae temporibus maiores. Ipsum modi, ullam dicta tempora vero earum libero illo ipsam inventore, ducimus vitae aut nam. Ullam, aut eveniet.
            Natus culpa corrupti, consequatur aliquid minima modi nostrum expedita voluptate maxime quas incidunt laboriosam optio obcaecati molestiae similique nulla asperiores! Perferendis placeat soluta eum iusto ipsa officiis ratione amet ullam!
            Aut temporibus deleniti fuga fugit voluptatibus quasi dolor totam praesentium nemo ipsa? Id at pariatur ducimus eius enim accusantium quas deleniti autem quidem beatae voluptatem, laborum facilis minima. In, atque?
            Laudantium cumque ratione incidunt numquam odit odio explicabo illum vel consequatur excepturi. Doloremque non quaerat illo sapiente a aliquam itaque et. Maxime eos accusamus officia aspernatur neque voluptatem aliquam accusantium?
            Quos temporibus maiores aliquam quia alias sequi perspiciatis, minima, porro asperiores voluptatibus dolorem error illo. Autem magni, eaque aut mollitia alias doloremque illum. Odit, quos quas totam enim autem et.
            Exercitationem, laborum tenetur dolorum quaerat molestias obcaecati? Ipsam provident sed sequi qui labore mollitia doloribus incidunt maiores ut dolor explicabo molestiae, eveniet quaerat tempore corporis beatae perspiciatis quas. Excepturi, minus.
            Quos illo rerum quod est. Dolor delectus perspiciatis rem magni cum totam, dolorum ipsam sunt tempora, repellat itaque veniam quidem eligendi quae quas! Assumenda, perferendis temporibus. Iste at ipsa id?
            Minus soluta beatae, incidunt deleniti adipisci natus, at, provident magni dolorum repellat omnis! Voluptatibus non perferendis velit amet nemo. Labore enim earum, necessitatibus cumque dolorem voluptate ut nisi aut illo!
            Quas, ratione quia? Illo perspiciatis porro facere, eum veritatis velit recusandae sapiente numquam ex omnis quae blanditiis quod in doloribus tempora consequatur ea et magnam ipsum accusantium itaque nesciunt. Fugiat?`,
        },
        {
            name: 'Loren',
            date: 'Jun 30 2024',
            title:'what the hell! loremklsdfjldskfjdslk fjdslkf jsdlkf jdslkf jsdlkf jsdflksdj fsldkf jsdlkfj  sdlkfsdj flkdsjf sdlkfjsd lfdsjklf ds',
            content: `Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, iure perferendis officiis eaque fugiat molestiae laudantium corporis eius sapiente itaque reprehenderit fuga suscipit velit accusamus quis? Dolorum hic quaerat quos.
            Corrupti nesciunt dolorum vitae aliquam facere aperiam deserunt, sit necessitatibus velit laboriosam adipisci magni assumenda, nam neque sequi, corporis mollitia repellendus ipsa nulla. Voluptas, incidunt. Laudantium non pariatur magni exercitationem.
            Eos in expedita numquam velit. Impedit, quaerat ab! Optio inventore vel recusandae numquam perferendis. A sapiente officia ea provident minus, sunt, perferendis est voluptatem adipisci eaque fugiat nostrum maxime dicta?
            Numquam iusto earum amet quisquam perferendis illo perspiciatis ipsum laboriosam eaque, consequuntur consectetur enim eos necessitatibus, magnam dignissimos, dolore ab sed praesentium nam! Enim beatae molestiae deleniti, nulla maiores vitae?
            Rem, architecto amet. Quasi, eum distinctio mollitia numquam et placeat necessitatibus ipsa nostrum! Facere, labore odio ducimus consequuntur perferendis saepe harum, quae, veniam sint quos animi blanditiis laboriosam quod beatae.
            Iure tempore quia sed sint accusamus quaerat delectus vero? Iste nostrum, temporibus fugit saepe soluta consectetur dignissimos facere alias aut ducimus laborum quisquam quibusdam similique natus nesciunt suscipit dicta doloribus.
            Consequuntur corrupti optio et culpa soluta, quisquam sunt molestias voluptates quia dolor illum? Autem, amet, repellendus molestias minus deleniti nam quo odio illo itaque, molestiae labore dolore eum animi voluptatum.
            Consequuntur exercitationem dolorum ullam tempora fugiat quia vero pariatur distinctio vitae dicta sint et, est voluptates optio praesentium culpa maiores? Asperiores reprehenderit rem aperiam, eos suscipit velit molestiae placeat hic!
            Repellendus molestias sapiente numquam maxime quae quasi voluptas nam, natus aut, est unde amet quod? Omnis architecto officiis dolore, atque explicabo quas iste inventore rem earum odio? Velit, expedita doloribus?
            Iure doloremque hic eveniet nostrum voluptas quo commodi enim fugit quam temporibus consectetur ipsum amet, corrupti quasi! Temporibus, quae impedit velit sit obcaecati dolores pariatur, est quasi, quaerat eveniet sapiente.`,
        },
        
    ];

    const toggleReview = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='flex flex-col'>
            <span className='text-sm font-bold'>Showing 1-3 of {reviews.length} reviews</span>
            <div className='flex flex-col gap-5 divide-y divide-gray-500'>
                {reviews.map((review, index) => (
                    <div key={index} className='flex gap-20 pt-5 max-lg:gap-0'>
                        <div className='flex text-xs'>
                            <div className='flex flex-col gap-3 max-lg:hidden'>
                                <span className='text-gray-500'>{review.date}</span>
                                <div className='flex gap-1 items-center'>
                                    <img src={user} className="size-4" />
                                    <span className='font-bold'>{review.name}</span>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <span className='font-bold'>Item details</span>
                                    <span className='text-[11px] text-gray-600'>Color: Black</span>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <span className='font-bold'>Sold and shipped by</span>
                                    <span className='text-[11px] text-gray-600'>Alexander the great</span>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-3'>
                            <div>Verified purchase</div>
                            <div className='flex gap-1 items-center lg:hidden'>
                                <img src={user} className="size-4" />
                                <span className='font-bold'>{review.name}</span>
                            </div>
                            <div className='text-sm font-bold'>{review.title}</div>
                            <p className={`${openIndex === index ? 'line-clamp-none' : 'line-clamp-2'} w-[550px]`} ref={ref}>
                                {review.content}
                            </p>
                            
                            <button
                                onClick={() => toggleReview(index)}
                                className='text-xs text-left underline text-gray-600 hover:no-underline hover:text-blue-700'
                            >
                                {openIndex === index ? 'Show less' : 'Read more'}
                            </button>
                            <div className='flex gap-3'>
                                <span>Helpful?</span>
                                <div className='flex gap-1'>
                                    <img src='' />
                                    (0)
                                </div>
                                <div className='flex gap-1'>
                                    <img src='' />
                                    (0)
                                </div>
                                <a href='#' className='text-xs underline text-gray-600 hover:no-underline hover:text-blue-700'>Report</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
