	// Global App wrapper
	var TODOAPP = TODOAPP || {};

	// Define DOM elements
	TODOAPP.unfinishedTable = document.getElementById( 'unfinished-todos' );

	TODOAPP.finishedTable = document.getElementById( 'finished-todos' );

	TODOAPP.addItemForm = document.getElementById( 'add-item-form' );

	TODOAPP.todos = [];
	TODOAPP.completed = [];

	TODOAPP.Item = function(str){
		this.textContent = str;
		this.completed = false;
	}

	TODOAPP.Item.prototype.issue = 0;

	TODOAPP.addItemForm.onsubmit = function(){
		var itemText = this.elements[0].value;
		if (itemText.length > 0){
			var newItem = new TODOAPP.Item(itemText);
			TODOAPP.addItem(newItem);
		}
		TODOAPP.Item.prototype.issue++;
		this.elements[0].value = '';
		// prevent page refresh
		return false;
	}

	TODOAPP.addItem = function(itemObj){
		// create new item.row in todo table
		var newRow = TODOAPP.unfinishedTable.insertRow(0);
		newRow.classList.add('item');
		itemObj.row = itemObj.row || newRow;


		// ===== CHECKBOX =====
		// create table cell for checkbox
		var checkCell = newRow.insertCell(0);
		checkCell.classList.add( 'mark-complete' );

		// crate an unchecked checkbox
		var checkBox = document.createElement( 'input' );
		checkBox.type = 'checkbox';
		checkBox.checked = false;

		// put that checkbox in the checkbox cell
		checkCell.appendChild(checkBox);
		var itemText = document.createTextNode( itemObj.textContent );
		itemObj.checkBox = checkBox;

		// ===== ITEM TODO CONTENT =====
		// create table cell for todo text
		var bodyCell = newRow.insertCell(-1);
		bodyCell.classList.add( 'item-body' );

		// put that text in the body cell
		var itemText = itemObj.textContent;
		bodyCell.innerHTML = itemText;

		var theItem = itemObj;
		checkBox.onclick = function() {
			console.log(theItem);
			TODOAPP.completeItem(theItem);
		}

		// this.finishedTable.removeChild(itemObj.row);
		// this.unfinishedTable.appendChild(itemObj.row);
		// if(this.completed.indexOf(itemObj) != -1 ) {
		// 	var itemIndex = this.todos.indexOf(itemObj);
		// 	var item = this.todos.splice(itemIndex, 1)[0];
		// 	this.todos.unshift(item);
		// }
	}

	TODOAPP.completeItem = function(itemObj){
		this.unfinishedTable.removeChild(itemObj.row);
		this.finishedTable.appendChild(itemObj.row);
		if(this.todos.indexOf(itemObj) != -1 ) {
			var itemIndex = this.todos.indexOf(itemObj);
			var item = this.todos.splice(itemIndex, 1)[0];
			this.completed.push(item);
		}
	}








