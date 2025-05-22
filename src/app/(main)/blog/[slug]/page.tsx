import CardBlog from "@/components/card/CardBlog";
import { GetBlogAll, getBlog } from "@/service/api";

async function page({ params }: { params: { slug: string } }) {
    const newBlogs = await GetBlogAll({ limit: 2, offset: 0, sort_column: "created_at", sort_order: "desc" });

    const detailBlog = await getBlog(params.slug);

    return (
        <div className='container container-xl mx-auto px-4 pb-4'>
            <section style={{ backgroundImage: `url(${detailBlog.image})` }} className=' w-full h-[300px] md:h-[400px] lg:h-[600px] p-10 gap-2 flex flex-col justify-end bg-cover bg-no-repeat bg-center rounded-3xl'>
                <div className="bg-neutral-900 p-4 rounded-3xl bg-opacity-40">
                    <p className='hidden md:block text-neutral-200 '>15 Juli 2023, oleh Shawn Mendes</p>
                    <h1 className='hidden md:block text-neutral-50 md:text-4xl lg:text-6xl font-bold'>{detailBlog.title}</h1>
                </div>
            </section>
            <div className="flex gap-6 mt-4 lg:mt-10">
                <section className="text-neutral-900 flex flex-col gap-4">
                    {detailBlog.content}
                    {/* <div>
                        <p className='block md:hidden text-neutral-700 text-base'>15 Juli 2023, oleh Shawn Mendes</p>
                        <h1 className='block md:hidden text-neutral-900 text-xl font-bold'>{newBlogs[1].title}</h1>
                    </div>
                    <p> <b>voow.com </b> - Era digital yang semakin maju, banyak pasangan memilih untuk menciptakan pengalaman pernikahan yang unik dengan menggunakan teknologi modern. Salah satu tren terkini yang semakin populer adalah menggunakan website undangan pernikahan online. Dengan kemudahan akses dan beragam fitur interaktif, website undangan pernikahan online memberikan pengalaman yang praktis, efisien, dan mengesankan bagi para tamu undangan.</p>
                    <h3 className="font-bold text-xl">Perbedaan undangan digital dan website</h3>
                    <ol className="list-decimal pl-4">
                        <li>Undangan digital umumnya berupa file elektronik seperti video atau gambar yang dapat dikirim melalui WhatsApp atau platform komunikasi lainnya. Sedangkan undangan website adalah halaman web interaktif yang dapat diakses melalui browser internet. Undangan digital dapat langsung dikirimkan ke tamu undangan secara individual atau massal, sedangkan undangan website memerlukan tautan yang harus diberikan kepada tamu undangan.</li>
                        <li>Undangan digital biasanya berisi informasi inti seperti tanggal, waktu, dan lokasi pernikahan. Namun, undangan website menyediakan ruang lebih besar untuk menampilkan informasi yang lebih rinci seperti cerita pasangan, galeri foto, daftar hadiah, RSVP online, dan fitur interaktif lainnya. Undangan website memungkinkan tamu undangan untuk berinteraksi, meninggalkan ucapan selamat, dan memberikan respons secara langsung.</li>
                        <li>Undangan digital seperti video dan gambar memiliki keterbatasan dalam hal pengiriman undangna dengan nama tamu yang berbeda, karena jika ingin berbeda nama tamu undangan harus didesain satu persatu secara manual. Di sisi lain, undangna website memberikan fleksibilitas yang lebih besar untuk menyesuaikan nama tamu undangan dengan hanya cukup membuat satu undangan website</li>
                    </ol>
                    <div className="flex gap-4">
                        <div className="flex flex-col gap-2">
                            <p className="text-base text-blue-500">Postingan sebelumnya</p>
                            <h5 className="text-md font-bold">Judul Blog Dengan Maksimal 2 Baris Saja: Jika Lebih Maka Tampilannya Akan Seperti Ini</h5>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-base text-blue-500">Postingan selanjutnya</p>
                            <h5 className="text-md font-bold">Judul Blog Dengan Maksimal 2 Baris Saja: Jika Lebih Maka Tampilannya Akan Seperti Ini</h5>
                        </div>
                    </div> */}
                </section>
                <section className="hidden lg:flex flex-col gap-4">
                    <h3 className="text-xl text-neutral-900 font-bold">Artikel Terbaru</h3>
                    {newBlogs.map((blog) => (
                        <CardBlog key={blog.id} blog={blog} />
                    ))}
                </section>
            </div>
        </div>
    )
}

export default page;