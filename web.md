# WEB


### What are the three primary Fielding constraints? (Bonus if you can say who Fielding is!)
Client-Server, Stateless, Uniform Interface

### What sub-constraints make up a Uniform Interface
Identification of Resources, manipulation of resources through representations, self-descriptive messageshypermedia, hypermedia

### Walk through an arbitrary example of a RESTful request/response cycle, and describe what makes it RESTful


###  What happens when you type in www.google.com and hit enter?
1. The browser checks the cache for a DNS record to find the corresponding IP address
2. If the requested URL is not in the cache, ISP’s DNS server initiates a DNS query to find the IP address of the server
3. Browser initiates a TCP connection with the server
4. The browser sends an HTTP request to the web server
5. The server handles the request and sends back a response
6. The browser displays the HTML content


### Why do we need a DNS?
It links websites strings to their corresponding IP address


### Explain TCP, and why it is a necessary protocol
Transmission Control Protocol is a way to make sure every piece of data you requested is accounted for before being given to you computer. it ensures that all data is sent for a more reliable experience

App => Transport => Internet => Network


### What are the common HTTP methods? When are they used, and what do they accomplish?
1.	GET
The GET method is used to retrieve information from the given server using a given URI. Requests using GET should only retrieve data and should have no other effect on the data.
2.	HEAD
Same as GET, but transfers the status line and header section only.
3.	POST
A POST request is used to send data to the server, for example, customer information, file upload, etc. using HTML forms.
4.	PUT
Replaces all current representations of the target resource with the uploaded content.
5.	DELETE
Removes all current representations of the target resource given by a URI.
6.	CONNECT
Establishes a tunnel to the server identified by a given URI.
7.	OPTIONS
Describes the communication options for the target resource.
8.	TRACE
Performs a message loop-back test along the path to the target resource.

### What is the difference between HTTP and HTTPS
HTTP has the ability to fall to a Man in the Middle Attack, HTTPS is a bit more secure


### What is the difference between localStorage and sessionStorage?
localStorage persists data after the browser is closed and sessionStorage does not

### Why is it important that users cannot modify their cookies?
They contain authentication information so if users change that info, they server thinks they are someone else

### When are cookies sent to the server?
All cookies valid for a page are sent from the browser to the server for every request to the same domain - this includes the original page request, any subsequent Ajax requests, all images, stylesheets, scripts, and fonts


### What is the danger of an XSS
Cross-site Scripting (XSS) refers to client-side code injection attack wherein an attacker can execute malicious scripts (also commonly referred to as a malicious payload) into a legitimate website or web application. XSS is amongst the most rampant of web application vulnerabilities and occurs when a web application makes use of unvalidated or unencoded user input within the output it generates.


### What is a CSRF Attack?
An attack whereby a malicious entity tricks a victim into performing actions on behalf of the attacker in two parts. The first part is to trick the victim into clicking a link or loading up a page. This is normally done through social engineering which works exceptionally well into leveraging a victim’s curiosity to click on malicious links. The second part is to send a crafted request in the victim’s browser, that will send a legitimate looking request to the web application. The request will be sent with the values that the attacker wants, including any Cookies that the victim has associated with that website. This way, the web application knows that this victim can perform certain actions on the website and any request sent with these HTTP credentials or Cookies, will be considered as legitimate, even though the victim would be sending the request on the attacker’s command.

### How can you prevent CSRF Vulnerabilities?
Synchronizer Tokens, Same Site Cookies

### Select the correct statement(s) about HTTP methods and status codes
D) A 201 code could be what you should expect when you create a valid blog post
E) A 301 code could indicate that the data cached in your browser already matches what would be returned by your request

### Select the correct statement(s) about HTTP methods
A) POST requests cannot be bookmarked
B) GET requests can contain a body, but you should not expect it to have meaning to what is returned
C) PATCH requests are interpreted to replace only the specified fields
D) PUT requests that omit a field will update the resource b setting that field to null

### Choose the correct statement(s) about HTTPS
A) Successful Man in the Middle attacks can alter the request you are sending without your knowledge
D) Asymmetric Key exchange usually relies on a Certificate Authority to certify public keys

### What is an XMLHttpRequest?
an API in the form of an object whose methods transfer data between a web browser and a web server. The object is provided by the browser's JavaScript environment. The XMLHttpRequest object can be used to exchange data with a server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.


### When are two pages considered to have the same origin?
Two pages have the same origin if the protocol, port (if one is specified), and host are the same for both pages

### How might you allow cross-origin resource sharing?
HTTP Request Headers

### What is CORS?
Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP headers to tell a browser to let a web application running at one origin (domain) have permission to access selected resources from a server at a different origin. A web application makes a cross-origin HTTP request when it requests a resource that has a different origin (domain, protocol, and port) than its own origin.

### What are the advantages and disadvantages of NoSQL databases vs. SQL databases?
SQL - columns and rows, relational data but can't handle huge scales

NoSQL - can handle huge scales, but needs to be constructed by experts