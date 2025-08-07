"use client";

import styles from "../styles/CardReview.module.css";
import { Card } from "@/shared/card";
import { ICardReview } from "../types/CardReview.types";
import { useEffect, useState } from "react";
import animationWordWrite from "@/utils/animationWordWrite";
import { BsPersonFill, BsStarFill } from "react-icons/bs";

export default function CardReview({ author }: ICardReview){
    const [indexReview, setIndexReview] = useState(0);
    const [review, setReview] = useState(author?.reviews[indexReview] ?? undefined);
    const [comment, setComment] = useState<string | boolean>("");

    useEffect(() => {
        (async () => {
            let animatedText = "";
            for await (const char of animationWordWrite(review.comment ?? "", 50)) {
                animatedText += char;
                if(animatedText == review.comment) setComment(false);
                else setComment(animatedText);
            }
        })();
    }, [review]);

    useEffect(() => {
        if (!comment) {
            const timer = setTimeout(() => {
                if(!author.reviews[indexReview + 1]) setIndexReview(0);
                else setIndexReview(prev => prev + 1);
                setReview(author.reviews[indexReview]);
                setComment("");
            }, 2000 + Math.floor(Math.random() * (300 - 100 + 1)) + 100);
      
            return () => clearTimeout(timer);
        }
    }, [comment, author.reviews, indexReview]);

    return(
        <Card className={styles.wrapperReview}>
            <p>{review?.projectName}</p>
            <p className={`p_small ${styles.animationWrite}`}>{!comment ? review.comment : comment}</p>
            <div className={styles.footerReview}>
                <p className="p_small"><BsPersonFill />{review.clientName}</p>
                <p className="p_small"><BsStarFill className={styles.icon} />{review.star}</p>
            </div>
        </Card>
    );
}