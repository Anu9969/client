import React from "react";
import articleContent from './article-content';

const ArticleList =() =>{
    return       <div>
        <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-900">
            Articles
        </h1>
        <div className="container py-4 mx-auto">
            <div className="flex flex-wrap">
                {articleContent.map((article, key) => (
                    <div className="w-full md:w-1/2 xl:w-1/3 p-6 flex flex-col" key={key}>
                        <img className="hover:grow hover:shadow-lg" src={article.thumbnail} alt={article.title} />
                        <div className="flex flex-col flex-grow mt-6">
                            <h2 className="text-gray-900 text-lg title-font font-medium">{article.title}</h2>
                            <p className="text-gray-500 text-base">{article.content[0].substring(0, 150)}...</p>
                            <a className="mt-3 text-indigo-500 inline-flex items-center" href={`/articles/${article.name}`}>Learn More
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
</div>
}

export default ArticleList;