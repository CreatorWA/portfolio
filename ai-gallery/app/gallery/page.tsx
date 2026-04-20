import { PostCard } from "@/components/gallery/post-card"

// 샘플 이미지 데이터 (다양한 비율의 이미지)
const samplePosts = [
  { id: "1", imageUrl: "/images/ai_images_1.jpg", alt: "",aspectRatio: "landscape" as const },
  { id: "2", imageUrl: "/images/ai_images_2.jpg", alt: "", aspectRatio: "landscape" as const },
  { id: "3", imageUrl: "/images/ai_images_3.jpg", alt: "", aspectRatio: "landscape" as const },
  { id: "4", imageUrl: "/images/ai_images_4.jpg", alt: "", aspectRatio: "landscape" as const },
  { id: "5", imageUrl: "/images/ai_images_5.jpg", alt: "", aspectRatio: "landscape" as const },
  { id: "6", imageUrl: "/images/ai_images_6.jpg", alt: "", aspectRatio: "landscape" as const },
  { id: "7", imageUrl: "/images/ai_images_7.jpg", alt: "", aspectRatio: "landscape" as const },
  { id: "8", imageUrl: "/images/ai_images_8.jpg", alt: "", aspectRatio: "landscape" as const },
  { id: "9", imageUrl: "/images/ai_images_9.jpg", alt: "", aspectRatio: "landscape" as const },
  { id: "10", imageUrl: "/images/ai_images_10.jpg", alt: "", aspectRatio: "landscape" as const },
  { id: "11", imageUrl: "/images/ai_images_11.jpg", alt: "", aspectRatio: "landscape" as const },
  { id: "12", imageUrl: "/images/ai_images_12.jpg", alt: "", aspectRatio: "landscape" as const },
  { id: "13", imageUrl: "/images/ai_images_13.jpg", alt: "",aspectRatio: "landscape" as const },
  { id: "14", imageUrl: "/images/ai_images_14.jpg", alt: "", aspectRatio: "landscape" as const },
  { id: "15", imageUrl: "/images/ai_images_15.jpg", alt: "", aspectRatio: "landscape" as const },
  { id: "16", imageUrl: "/images/ai_images_16.jpg", alt: "", aspectRatio: "landscape" as const },
  { id: "17", imageUrl: "/images/ai_images_17.jpg", alt: "", aspectRatio: "landscape" as const },
  { id: "18", imageUrl: "/images/ai_images_18.jpg", alt: "", aspectRatio: "landscape" as const },
  { id: "19", imageUrl: "/images/ai_images_19.jpg", alt: "", aspectRatio: "landscape" as const },
  { id: "20", imageUrl: "/images/ai_images_20.jpg", alt: "", aspectRatio: "landscape" as const },
  { id: "21", imageUrl: "/images/ai_images_21.jpg", alt: "", aspectRatio: "landscape" as const },
  { id: "22", imageUrl: "/images/ai_images_22.jpg", alt: "", aspectRatio: "landscape" as const },
  { id: "23", imageUrl: "/images/ai_images_23.jpg", alt: "", aspectRatio: "landscape" as const },
  { id: "24", imageUrl: "/images/ai_images_24.jpg", alt: "", aspectRatio: "landscape" as const },
]

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md  pt-14 pb-6 ">
        <div className="mx-auto flex flex-col  max-w-7xl items-center justify-center px-4 ">
          <h1 className="text-xl font-semibold tracking-tight text-foreground sm:xl md:text-2xl lg:text-3xl ">
            Gallery
          </h1>
          <p className="mt-1 text-sm text-gray-400 sm:sm md:text-base lg:text-lg  text-center mx-5">
  These are generated images. I used Firefly and Gemini, 
  created the page in v0, and completed it in Cursor.
</p>
        </div>
      </header>

      {/* Gallery Grid */}
      <section className="mx-auto max-w-7xl px-4 py-2">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {samplePosts.map((post) => (
            <div key={post.id} className="mb-4 break-inside-avoid">
              <PostCard
                id={post.id}
                imageUrl={post.imageUrl}
                alt={post.alt}
                aspectRatio={post.aspectRatio}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
