# WEB


### What are the three primary Fielding constraints? (Bonus if you can say who Fielding is!)
Client-Server, Stateless, Uniform Interface

### What sub-constraints make up a Uniform Interface
Identification of Resources, manipulation of resources through representations
, self-descriptive messageshypermedia, hypermedia

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

