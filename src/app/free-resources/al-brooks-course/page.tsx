
'use client';

import { StarBorder } from "@/components/ui/star-border";
import { mockFreeResources } from "@/lib/mockData";
import type { VideoLesson } from "@/lib/types";
import { PlayCircle, ListChecks, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";
import type { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Free Al Brooks Price Action Course',
//   description: "Get a sample of Al Brooks' renowned price action trading methodology with these free sample video lessons and understand how a professional trader reads charts.",
//   alternates: {
//     canonical: '/free-resources/al-brooks-course',
//   },
//   openGraph: {
//     title: 'Free Al Brooks Price Action Course | TradingisEZ',
//     description: "Get free video lessons from Al Brooks' famous price action trading course.",
//     url: '/free-resources/al-brooks-course',
//   }
// };


export default function AlBrooksFreeCoursePage() {
  const [isMounted, setIsMounted] = useState(false);
  // Find courseData once. It should be stable on the client after mockFreeResources is imported.
  const courseData = mockFreeResources.find(r => r.slug === "al-brooks-course" && r.resourceType === "Free Video Course Series");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || !courseData) {
    // Render a loading state or null during SSR and initial client render before mount
    // to prevent hydration mismatch for dynamic parts.
    // This ensures that the content generating href and src attributes is only rendered client-side.
    return <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">Loading course content...</div>;
  }

  // Destructure after ensuring courseData exists and component is mounted
  const { title, pageIntroduction, mainAffiliateLink, mainCTAText, videoLessons, concludingCTASection } = courseData;

  const getYouTubeVideoId = (url: string): string | null => {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  // Filter out the specific lesson to be removed if videoLessons is an array
  const filteredLessons = videoLessons?.filter(lesson => lesson.lessonTitle !== "Lesson 2: Bar-by-Bar Analysis Introduction") || [];

  return (
    <div className="space-y-12">
      <section className="text-center py-8 md:py-16 bg-background rounded-xl shadow-xl">
        <div className="container mx-auto px-4">
          <PlayCircle className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-4" />
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">{title}</h1>
          {pageIntroduction && (
            <p className="text-md md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
               dangerouslySetInnerHTML={{ __html: pageIntroduction.replace(/\n/g, '<br />') }} />
          )}
          {mainAffiliateLink && mainCTAText && (
            <>
              <StarBorder<typeof Link>
                as={Link}
                href={mainAffiliateLink} 
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="inline-flex items-center justify-center">
                  {mainCTAText} <ExternalLink className="ml-2 h-4 w-4" />
                </span>
              </StarBorder>
              <p className="text-xs text-muted-foreground mt-2">(Affiliate Link)</p>
            </>
          )}
        </div>
      </section>

      {filteredLessons.length > 0 && (
        <section className="container mx-auto px-4 space-y-8">
          {filteredLessons.map((lesson, index) => {
            const videoId = lesson.videoEmbedCodeOrURL ? getYouTubeVideoId(lesson.videoEmbedCodeOrURL) : null;
            const isYouTubeVideo = !!videoId;
            
            return (
              <Card key={index} className="shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="bg-muted p-4 md:p-6 flex items-center justify-center aspect-video max-w-xl mx-auto w-full">
                    {isYouTubeVideo ? (
                       <iframe
                          className="w-full h-full"
                          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=0&modestbranding=1&rel=0&controls=1`}
                          title={lesson.lessonTitle}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                    ) : lesson.videoEmbedCodeOrURL && lesson.videoEmbedCodeOrURL.includes("iframe.mediadelivery.net") ? (
                       <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', width: '100%'}}>
                         <iframe
                            src={lesson.videoEmbedCodeOrURL}
                            style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border:0}}
                            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                            allowFullScreen
                            loading="lazy"
                         ></iframe>
                       </div>
                    ) : (
                      <div className="w-full h-full bg-black text-white flex flex-col items-center justify-center text-center">
                        <PlayCircle className="w-12 h-12 mb-2 opacity-50" />
                        <p>Video: {lesson.lessonTitle}<br/> 
                           {lesson.videoEmbedCodeOrURL ? `(Embed: ${lesson.videoEmbedCodeOrURL})` : '(Video source not available)'}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <CardHeader className="p-0 mb-3">
                      <CardTitle className="text-xl md:text-2xl text-foreground">{lesson.lessonTitle}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 space-y-4">
                      {lesson.lessonDescription && (
                        <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: lesson.lessonDescription.replace(/\n/g, '<br />') }} />
                      )}
                      {lesson.lessonKeyTakeaways && lesson.lessonKeyTakeaways.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-foreground mb-1.5 flex items-center">
                            <ListChecks className="w-5 h-5 mr-2 text-primary" /> Key Takeaways:
                          </h4>
                          <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm pl-2">
                            {lesson.lessonKeyTakeaways.map((takeaway, i) => (
                              <li key={i}>{takeaway}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {lesson.lessonCTAText && lesson.lessonCTALink && (
                        <div className="mt-6">
                           <StarBorder<typeof Link>
                            as={Link}
                            href={lesson.lessonCTALink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="inline-flex items-center justify-center">
                             {lesson.lessonCTAText} <ExternalLink className="ml-1.5 h-4 w-4" />
                            </span>
                          </StarBorder>
                           <p className="text-xs text-muted-foreground mt-2">(Affiliate Link)</p>
                        </div>
                      )}
                    </CardContent>
                  </div>
                </div>
              </Card>
            );
          })}
        </section>
      )}
    </div>
  );
}
