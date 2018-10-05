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

App => Transport => Internet =>