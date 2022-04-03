window.onload = () => {
  $('.sidenav').sidenav();
  
  getMostFrequentIntents();

  getCurrentUsers();

  notRelevantQueries();
}

function getMostFrequentIntents() {
  $.getJSON("getMostFrequentIntents", (res) => {
    res.forEach(item => {
      var intentItem = `
      <li>
        <div class="card horizontal">
          <div class="card-stacked">
            <div class="card-content">
              <p><strong>${item._id.response_utter}</strong></p>
              <p><strong>Count</strong>: ${item.count}</p>
            </div>
          </div>
        </div>
      </li>
      `
      $(intentItem).appendTo('#mostFrequentIntentResponseList');
    })
  });
}

function getCurrentUsers() {
  $.getJSON("getCurrentUsers", (res) => {
    res.forEach(item => {
      var account = `
      <li>
        <div class="card horizontal">
          <div class="card-stacked">
            <div class="card-content">
              <p>${item.username}</p>
              <div style="cursor: pointer" onclick="deleteAccount('${item._id}')">
              <p style="color: red">Remove</p>
            </div>
          </div>
        </div>
      </li>
      `
      $(account).appendTo('#getCurrentUsersList');
    })
  });
}

function deleteAccount(accountId) {
  $.getJSON("deleteAccount", {query: accountId}, (res) => {
    $('#getCurrentUsersList').empty();
    getCurrentUsers();
  });
}

function notRelevantQueries() {
  $.getJSON("notRelevantQueries", (res) => {
    res.forEach(item => {
      var query = `
      <li>
        <div class="card horizontal">
          <div class="card-stacked">
            <div class="card-content">
              <p><strong>User asked</strong>: '${item.query}'</p>
              <p><strong>Chatbot Response</strong>: ${item.response_utter}</p>
            </div>
          </div>
        </div>
      </li>
      `
      $(query).appendTo('#notRelevantQueryList');
    })
  })
}