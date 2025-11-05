
'use client';

import type { BookListing } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Headphones, PlayCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";

interface AudiobookCardProps {
  book: BookListing;
}

const AudiobookCard = ({ book }: AudiobookCardProps) => {
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
      {book.bookCoverImage && (
        <div className="relative w-full h-64 bg-muted overflow-hidden"> {/* Added overflow-hidden here */}
          <Image
            src={book.bookCoverImage}
            alt={book.bookTitle}
            layout="fill"
            objectFit="contain"
            className="p-2 transition-transform duration-300 ease-in-out group-hover:scale-105"
            data-ai-hint="book cover"
          />
        </div>
      )}
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold line-clamp-2 text-foreground">{book.bookTitle}</CardTitle>
        {book.bookAuthor && (
          <CardDescription className="text-xs text-muted-foreground">By {book.bookAuthor}</CardDescription>
        )}
      </CardHeader>
      <CardContent className="flex-grow">
        {book.bookDescription && (
          <p className="text-sm text-muted-foreground line-clamp-3 mb-3">{book.bookDescription}</p>
        )}
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row sm:justify-center gap-2 mt-auto pt-3">
        {book.bookSampleLink && (
           <Dialog>
            <DialogTrigger asChild>
              <Button
                className="bg-accent text-accent-foreground hover:bg-accent-hover flex-1 w-full sm:w-auto"
                size="sm"
              >
                <PlayCircle className="mr-1.5 h-4 w-4 flex-shrink-0" /> Hear Sample
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[80vw] md:max-w-[60vw] lg:max-w-[50vw] h-[70vh] p-0 flex flex-col">
              <DialogHeader className="p-4 border-b">
                <DialogTitle>Audio Sample: {book.bookTitle}</DialogTitle>
                <DialogDescription>
                  Playing a sample from Audible. This player is provided by Audible.
                </DialogDescription>
              </DialogHeader>
              <div className="w-full flex-grow">
                 <iframe
                    src={book.bookSampleLink}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen
                    title={`Audible Sample for ${book.bookTitle}`}
                  ></iframe>
              </div>
            </DialogContent>
          </Dialog>
        )}
        <Button
          asChild
          className="bg-accent text-accent-foreground hover:bg-accent-hover flex-1 w-full sm:w-auto"
          size="sm"
        >
          <Link
            href={book.bookAudibleAffiliateLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Headphones className="mr-1.5 h-4 w-4 flex-shrink-0" />
            Listen Free
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default AudiobookCard;
