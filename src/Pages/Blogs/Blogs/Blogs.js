import React from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            <Blog>
                <div>
                    <h1 className='text-2xl text-amber-200 mb-3'>Difference Between JavaScript and node.js</h1>
                    <p>• JavaScript is a programming language which is used for writing script and adding logic to a website. Node.js is a JavaScript runtime environment. <br />
                        • JavaScript used on client side , where Node.js used on Server side. <br />
                        • We can connect or add HTML through JavaScript and Integrate with DOM, But we can't connect or add HTML through node.js . <br />
                        • JavaScript used in Front end or client side development, and Node.js is used in Server side development. <br />
                        • Without Node.js JavaScript can only be run in browser. With Node.js JavaScript can run outside of the browser. <br />
                        • All browser have JavaScript engines that run the JavaScript of webpage. Node.js is simply the V8 engine which can also run JavaScript.</p>
                </div>
            </Blog>
            <Blog>
                <div>
                    <h1 className='text-2xl text-amber-200 mb-3'>When should you use node.js and when should you use mongodb?</h1>
                    <p>• Node.js is a server side JavaScript run time. We use node.js to run the server and connect the server with the client. Mostly when we need to run server side code asynchronously we use node.js. And as a JavaScript runtime environment node.js is smoother and faster. <br />
                        • Mongodb is a NOSQL open source database management program. Mongodb is used as an alternative to relational or SQL database. It has dynamic schemas for unstructured data and it is easy to store unstructured data or JSON. </p>
                </div>
            </Blog>
            <Blog>
                <div>
                    <h1 className='text-2xl text-amber-200 mb-3'>Differences between SQL and NOSQL databases</h1>
                    <p>• SQL database are relational. NoSQL database are non relational. <br />
                        • SQL database works better with structured data. NOSQL database has dynamic schemas for unstructured data. <br />
                        • SQL database are vertically scalable. And NoSQL databases are horizontally scalable, meaning that we simply add more servers to your database to get more storage space. <br />
                        • The SQL model storage is a table with fixed row and columns. NoSQL database includes key-value model, column storage model, document database, and graph database.</p>
                </div>
            </Blog>
            <Blog>
                <div>
                    <h1 className='text-2xl text-amber-200 mb-3'>What is the purpose of JWT and how does it work?</h1>
                    <p>JSON web token is used to share security information between server side and client side. JSON web tokens are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. When a specific action is taken from the client side, server stores a token. Server receive the user information and encrypt that. After completing authentication the token go through server to client side and get store in browser storage. After that, every time when a user came back to the website through the token server gives authorization to that specific user.</p>
                </div>
            </Blog>
        </div>
    );
};

export default Blogs;