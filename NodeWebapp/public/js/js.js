var lastClick = 0;
var lastSentQueryId = null;

window.onload = () => {
  $('.sidenav').sidenav();

  var input = document.getElementById("queryTextArea");
  input.addEventListener("keypress", function(event) {
    if (event.code === "Enter" || event.key === "Enter") {
     event.preventDefault();

     sendQuery();
    }
  });

  setTimeout(() => {
    showChatbotText(`
      Hey! I'm ClassBot and I'm here to assist you in Software Development 2. Ask me questions about this course!
      \<br> \<br>
      Examples:
      \<br>   - "Who teaches this course?"
      \<br>   - "What is JUnit Testing?"
      \<br>   - "why avoid code duplication"
      `)
  }, 1000)
}

function sendQuery() {
  if (Date.now() - lastClick < 1000) return;
  lastClick = Date.now();
  var input = document.getElementById("queryTextArea");
	var query = input.value;

  console.log(query.length)


  if(query.length <= 0 || query.length >= 301) return

	showUserText(query);
  botAwaitingResponse();
  setTimeout(() => {
    $('#messaging_container').prop('scrollTop', () => {
      return $('#messaging_container').prop('scrollHeight')
    })
    
    $.getJSON("sendingQuery", {query: query}, (res) => {
      console.log(res)
      showChatbotText(res.response, res.location)
      lastSentQueryId = res.id
      
      $('#messaging_container').prop('scrollTop', () => {
        return $('#messaging_container').prop('scrollHeight')
      })
    });
  }, 600)
  input.value = "";
	return;
}

function showUserText(string) {
	var message = `
    <li>
      <div class="flex" style="justify-content: flex-end">
        <div class="card" style="border-radius: 5px; box-shadow: 2px 1px 1px rgb(0, 108, 209); background-color: rgb(0, 132, 255)">
          <div class="card-body" style="border-radius: 5px;">
              <p class="card-text" style="color: #fff">${string}</p>
          </div>
        </div>
      <div>
    </li>
	`;

	$(message).appendTo('#messaging_container');

	return;
}

function showChatbotText(response, location) {
  $('#isRelevantContainer').remove();
  $('#messaging_container').find('.thinking').remove()
  var message = ""
  try {
    message = `
    <li>
      <div class="flex" style="justify-content: flex-start">
        <i class='fa fa-robot' style='font-size:24px; color:rgb(99, 99, 99); padding-top: 10px; padding-right: 4px;'></i>
        <div class="card" style="border-radius: 5px;box-shadow: 2px 1px 1px rgb(238,238,238);">
          <div class="card-body" style="border-radius: 5px;">
            <h6 class="text-muted card-subtitle mb-2">ClassBot</h6>
            <p class="card-text">${response}</p>
    `

    if(location){
      message += `<p class="d-flex flex-row justify-content-end">${location}</p>`
    }

    message +=`
          </div>
          <div id="isRelevantContainer" class="flex" style="width: 190px; justify-content: space-between; font-size: 12px; position: absolute; bottom: -20; white-space: nowrap;">
            <div>Is this information relevant?</div>
            <div id="yes" class="blue-link">yes</div>
            <div id="no" class="blue-link">no</div>
          </div>
        </div>
      </div>
    </li>
    `
  } catch(err) {}

  $(message).appendTo('#messaging_container');

  var yes = document.getElementById("yes");
  yes.addEventListener("click", function(event) {
    $.post( "relevantFeedback", { id: lastSentQueryId, isRelevant: "yes" });
    $('#isRelevantContainer').remove();
  })

  var no = document.getElementById("no");
  no.addEventListener("click", function(event) {
    $.post( "relevantFeedback", { id: lastSentQueryId, isRelevant: "no" });
    $('#isRelevantContainer').remove();
  })
}

function botAwaitingResponse() {
  var message = `
  <li class="thinking">
    <div class="flex" style="justify-content: flex-start">
      <i class='fa fa-robot' style='font-size:24px; color:rgb(99, 99, 99); padding-top: 10px; padding-right: 4px;'></i>
      <div class="card" style="border-radius: 5px;box-shadow: 2px 1px 1px rgb(238,238,238);">
        <div class="card-body" style="border-radius: 5px;">
            <p class="card-text">...</p>
        </div>
      </div>
    </div>
  </li>
  `;

  $(message).appendTo('#messaging_container');
  return;
}
