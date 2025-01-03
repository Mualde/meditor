function AddTableBtn() {
    // Yeni table-container HTML yapısını oluşturuyoruz
    const tableContainer = document.createElement('div');
    tableContainer.id = 'table-container';
    tableContainer.innerHTML = `
        <button id="tableBtn" title="Tablo Ekle" onclick="openModal('tableModal')" onmousedown="quickTableMenu();">
            <i class="fa-solid fa-table"></i>
        </button>
		<div id="tableModal" class="modal" style="display:none">
			<div id="modal-content" class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Tablo Ekle</h5>
				</div>
				<div class="modal-body">
					<div class="form-group" style="border: 1px solid #ccc; padding: 10px; border-radius: 5px; position: relative;">
						<span style="position: absolute; top: -19px; left: 10px; padding:5px;background-color:#2e2e2e;color:white;border-radius:5px;font-size:10pt"> Tablo Başlığı </span>
						<br>
						<input type="text" id="table-title" placeholder="Tablo Başlık ekleyin (isteğe bağlı)" style="width:350px">
					</div>
					<br>
					<div class="form-group" style="border: 1px solid #ccc; padding: 10px; border-radius: 5px; position: relative;">
						<span style="position: absolute; top: -19px; left: 10px; padding:5px;background-color:#2e2e2e;color:white;border-radius:5px;font-size:10pt"> Tablo Yapısı </span>
						<br>
						<i class="fa-solid fa-table-columns"></i><input type="number" id="table-rows" min="1" value="3" style="width:50px" title="Sütun Sayısı">
						<i class="fa-solid fa-bars"></i><input type="number" id="table-cols" min="1" value="3" style="width:50px" title="Satır Sayısı">
						<i class="fa-solid fa-arrows-left-right-to-line"></i><input type="number" id="table-width" value="400" style="width:80px" title="Tablu Genişliği">
						<i class="fa-solid fa-text-width"></i>
						<select id="table-alignment" style="width:70px" title="Bulunduğu Yer">
							<option value="center">Orta</option>
							<option value="left">Sol</option>
							<option value="right">Sağ</option>
						</select>
					</div>
					<br>
					<div class="form-group" style="border: 1px solid #ccc; padding: 10px; border-radius: 5px; position: relative;">
						<span style="position: absolute; top: -19px; left: 10px; padding:5px;background-color:#2e2e2e;color:white;border-radius:5px;font-size:10pt"> Tablo Stili </span>
						<label for="border-width" title="Tablonun Stili">
							<i class="fas fa-border-style"></i>
						</label>
						<input type="number" title="Kenar Kalınlığı" id="border-width" value="1" style="width:50px">
						<select id="border-style" title="Kenar Tipi" style="width:70px">
							<option value="solid">―――</option>
							<option value="dashed">- - - - -</option>
							<option value="dotted">٠٠٠٠٠٠</option>
						</select>
						<input type="color" title="Kenar Rengi" id="border-color" value="#000000" list>
					</div>
				</div>
				<div class="modal-footer">
					<button onclick="createTable()">Tablo Oluştur</button>
					<button onclick="cancelModal();">İptal Et</button>
				</div>
			</div>
		</div>
		<div id="editTableModal" class="modal" style="display:none">
			<div id="modal-content" class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Tabloyu Düzenle</h5>
				</div>
				<div class="modal-body">
					<div class="form-group" style="border: 1px solid #ccc; padding: 10px; border-radius: 5px; position: relative;">
						<span style="position: absolute; top: -19px; left: 10px; padding:5px;background-color:#2e2e2e;color:white;border-radius:5px;font-size:10pt"> Tablo Başlığı </span>
						<br>
						<input type="text" id="edit-table-title" placeholder="Tablo Başlık ekleyin (isteğe bağlı)" style="width:350px">
					</div>
					<br>
					<div class="form-group" style="border: 1px solid #ccc; padding: 10px; border-radius: 5px; position: relative;">
						<span style="position: absolute; top: -19px; left: 10px; padding:5px;background-color:#2e2e2e;color:white;border-radius:5px;font-size:10pt"> Tablo Yapısı </span>
						<br>
						<i class="fa-solid fa-table-columns"></i><input type="number" id="edit-table-rows" min="1" value="3" style="width:50px" title="Sütun Sayısı">
						<i class="fa-solid fa-bars"></i><input type="number" id="edit-table-cols" min="1" value="3" style="width:50px" title="Satır Sayısı">
						<i class="fa-solid fa-arrows-left-right-to-line"></i><input type="number" id="edit-table-width" value="600" style="width:80px" title="Tablu Genişliği">
						<i class="fa-solid fa-text-width"></i>
						<select id="edit-table-alignment" style="width:70px" title="Bulunduğu Yer">
							<option value="center">Orta</option>
							<option value="left">Sol</option>
							<option value="right">Sağ</option>
						</select>
					</div>
					<br>
					<div class="form-group" style="border: 1px solid #ccc; padding: 10px; border-radius: 5px; position: relative;">
						<span style="position: absolute; top: -19px; left: 10px; padding:5px;background-color:#2e2e2e;color:white;border-radius:5px;font-size:10pt"> Tablo Stili </span>
						<label for="border-width" title="Tablonun Stili">
							<i class="fas fa-border-style"></i>
						</label>
						<input type="number" title="Kenar Kalınlığı" id="edit-border-width" value="1" style="width:50px">
						<select id="edit-border-style" title="Kenar Tipi" style="width:70px">
							<option value="solid">―――</option>
							<option value="dashed">- - - - -</option>
							<option value="dotted">٠٠٠٠٠٠</option>
						</select>
						<input type="color" title="Kenar Rengi" id="edit-border-color" value="#000000" list>
					</div>
				</div>
				<div class="modal-footer">
					<button onclick="updateTable()">Güncelle</button>
					<button onclick="cancelModal();">İptal Et</button>
				</div>
			</div>
		</div>
		
		
		<div id="editCellModal" class="modal" style="display:none">
			<div id="modal-content" class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Hücreyi Düzenle</h5>
				</div>
				<div class="modal-body">
					<!-- Hücre İçeriği -->
					<div class="form-group" style="border: 1px solid #ccc; padding: 10px; border-radius: 5px; position: relative;">
						<span style="position: absolute; top: -19px; left: 10px; padding:5px;background-color:#2e2e2e;color:white;border-radius:5px;font-size:10pt"> Hücre İçeriği </span>
						<br>
						<input type="text" id="edit-cell-content" placeholder="Hücre içeriğini buraya yazın" style="width:350px">
					</div>
					<br>
					<!-- Hücre Stili -->
					<div class="form-group" style="border: 1px solid #ccc; padding: 10px; border-radius: 5px; position: relative;">
						<span style="position: absolute; top: -19px; left: 10px; padding:5px;background-color:#2e2e2e;color:white;border-radius:5px;font-size:10pt"> Hücre Stili </span>
						<br>

						<i class="fas fa-fill-drip"></i><input type="color" id="edit-cell-bg-color" value="#ffffff" title="Hücre Arka Plan Rengi" list>

						<i class="fas fa-pen"></i><input type="color" id="edit-cell-text-color" value="#000000" title="Hücre Yazı Rengi" list>

						<i class="fas fa-text-height"></i><input type="number" id="edit-cell-font-size" value="14" style="width:50px" title="Yazı Boyutu">

						<i class="fas fa-border-style"></i><input type="number" id="edit-cell-border-width" value="1" style="width:50px" title="Kenar Kalınlığı">

						<i class="fas fa-border-style"></i><input type="color" id="edit-cell-border-color" value="#000000" title="Kenar Rengi" list>
					</div>
					<br>
				</div>
				<div class="modal-footer">
					<button onclick="updateCell()">Hücreyi Güncelle</button>
					<button onclick="cancelModal();">İptal Et</button>
				</div>
			</div>
		</div>
		
		<div id="tablosagtusmenu" class="sagtusmenu" style="display:none;width:250px">
			<div id="dragHandle" class="drag-handle" style="width:100%;text-align:center">
				<i class="fas fa-arrows-alt"></i> Hücre Ayarı Menüsü <i class="fas fa-arrows-alt"></i> 
			</div>
			<button title="Hücre Biçimlendir" onclick="this.parentNode.style.display='none';getDataFromCell();openModal('editCellModal');">
				<i class="fas fa-cogs"></i><i class="fa-solid fa-compress"></i>
			</button>
			<button title="Üst Tarafa Satır Ekle" onclick="addRowUp();">
				<i class="fas fa-arrow-up"></i><i class="fa-regular fa-square-plus"></i>
			</button>
			<button title="Alt Tarafa Satır Ekle" onclick="addRowDown();">
				<i class="fas fa-arrow-down"></i><i class="fa-regular fa-square-plus"></i>
			</button>
			<button title="Sola Sütun Ekle" onclick="addColumnLeft();">
				<i class="fas fa-arrow-left"></i><i class="fa-regular fa-square-plus"></i>
			</button>
			<button title="Sağa Sütun Ekle" onclick="addColumnRight();">
				<i class="fas fa-arrow-right"></i><i class="fa-regular fa-square-plus"></i>
			</button>
			<div style="width:100%;text-align:center"></div>
			<button id="delete-row" onclick="hucreBirlestir()" title="Hücreleri Birleştir">
				<i class="fa-solid fa-object-group"></i><i class="fa-solid fa-border-all"></i>
			</button>			
			
			<button id="delete-row" onclick="yatayBol()" title="Hücreyi Yatay Böl">
				<i class="fa-solid fa-border-all"></i><i class="fa-solid fa-table-columns"></i>
			</button>
			<div style="width:100%;text-align:center"></div>
			<button id="delete-row" onclick="deleteRow()" title="Satır Sil">
				<i class="fa-solid fa-arrows-left-right"></i><i class="fa-solid fa-trash"></i>
			</button>
			<button id="delete-column" onclick="deleteColumn()" title="Sütun Sil">
				<i class="fa-solid fa-up-down"></i><i class="fa-solid fa-trash"></i>
			</button>
		</div>
    `;

    if (toolbar) {toolbar.appendChild(tableContainer);}
	var tableBtnCon = document.getElementById('table-container');
	var tableBtn = document.getElementById('tableBtn');
	let offsetX = 0, offsetY = 0, isDragging = false;

	const dragHandles = document.querySelectorAll('.drag-handle'); // Tüm drag-handle öğelerini seç

	dragHandles.forEach(dragHandle => {
		dragHandle.addEventListener('mousedown', (e) => {
			e.preventDefault(); // Varsayılan seçim davranışını durdur
			isDragging = true;

			const menu = dragHandle.closest('.sagtusmenu'); // En yakın .sagtusmenu öğesini bul
			offsetX = e.clientX - menu.offsetLeft;
			offsetY = e.clientY - menu.offsetTop;
			menu.style.cursor = "move";

			// Sürüklemeyi başlatacak fonksiyonu tanımla
			const moveMenu = (e) => {
				if (isDragging) {
					menu.style.left = `${e.clientX - offsetX}px`;
					menu.style.top = `${e.clientY - offsetY}px`;
				}
			};

			// Sürükleme işlemi bittiğinde temizlik yap
			const stopDragging = () => {
				isDragging = false;
				menu.style.cursor = "default";
				document.removeEventListener('mousemove', moveMenu);
				document.removeEventListener('mouseup', stopDragging);
			};

			document.addEventListener('mousemove', moveMenu);
			document.addEventListener('mouseup', stopDragging);
		});
	});
}

let infoDisplay = null;
//Hızlı Tablo Oluştur Baş//
function quickTableMenu(e) {
    const tableBtnCon = document.getElementById('table-container');
    if (!tableBtnCon) {
        console.error("Table container bulunamadı!");
        return;
    }
    const existingMenu = document.getElementById('quick-table-menu');
    if (existingMenu) {
        existingMenu.remove();
    }
	const quickTableMenu = document.createElement('div');
	quickTableMenu.id = 'quick-table-menu';
	quickTableMenu.style.display = 'grid';
	quickTableMenu.style.gridTemplateColumns = 'repeat(9, 15px)'; 
	quickTableMenu.style.gap = '0'; 
	quickTableMenu.style.position = 'absolute';
	quickTableMenu.style.backgroundColor = '#fff';
	quickTableMenu.style.border = '1px solid #ccc';
    createQuickTableMenu(quickTableMenu);
	tableBtnCon.appendChild(quickTableMenu);
	infoDisplay = document.createElement('span');
	infoDisplay.id = 'infoDisplay';
	tableBtn.appendChild(infoDisplay);
	infoDisplay = document.getElementById('infoDisplay');
}
function createQuickTableMenu(quickTableMenu) {
	let startCell = null;
	let endCell = null;
    const gridSize = 9;
    for (let row = 1; row <= gridSize; row++) {
        for (let col = 1; col <= gridSize; col++) {
            const button = document.createElement('input');
            button.type = 'button';
            button.className = 'table-cell';
            button.dataset.row = row;
            button.dataset.col = col;
            button.style.width = '15px';
            button.style.height = '15px';
            button.title = col + 'X' + row; 
            button.addEventListener('mouseover', (e) => {
                const hoverRow = parseInt(e.target.dataset.row);
                const hoverCol = parseInt(e.target.dataset.col);
                quickTableMenu.querySelectorAll('.table-cell').forEach((cell) => {
                    const cellRow = parseInt(cell.dataset.row);
                    const cellCol = parseInt(cell.dataset.col);
                    if (cellRow <= hoverRow && cellCol <= hoverCol) {
                        cell.style.backgroundColor = 'lightblue';
                    } else {
                        cell.style.backgroundColor = '';
                    }
                });
                infoDisplay.innerHTML = e.target.title;
            });
			button.addEventListener('mouseup', (e) => {
                const endCell = e.target;
                if (startCell) {
                    const startRow = parseInt(startCell.dataset.row);
                    const startCol = parseInt(startCell.dataset.col);
                    const endRow = parseInt(endCell.dataset.row);
                    const endCol = parseInt(endCell.dataset.col);
                    const rows = Math.abs(endRow - startRow) + 1;
                    const cols = Math.abs(endCol - startCol) + 1;
                    createTableQuick(rows, cols);
                    quickTableMenu.remove();
					infoDisplay.remove();
                }
            });
            
            quickTableMenu.appendChild(button);
        }
    }
    const firstCell = quickTableMenu.querySelector('[data-row="1"][data-col="1"]');
    if (firstCell) {
        startCell = firstCell;
        firstCell.classList.add('selectedbtn');
    }
}
function createTableQuick(rows, cols) {
    let tableHTML = '<table style="border-collapse: collapse; margin: 0 auto; border: 1px solid black; width:500px">';
    for (let i = 0; i < rows; i++) {tableHTML += '<tr>';for (let j = 0; j < cols; j++) {tableHTML += '<td style="border: 1px solid black;">&nbsp;</td>';}tableHTML += '</tr>';}
    tableHTML += '</table>';
    document.execCommand('insertHTML', false, tableHTML);
}
//Hızlı Tablo Oluştur Son//

//Tablo Oluştur Baş//
function createTable() {
    const formData = gatherTableData();
    const table = generateTableHTML(formData);
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const tableWrapper = document.createElement('div');
    tableWrapper.innerHTML = table;
    savedSelection.insertNode(tableWrapper);
    closeModal();
}
function gatherTableData() {
    return {
        title: document.getElementById('table-title').value,
        rows: parseInt(document.getElementById('table-rows').value),
        cols: parseInt(document.getElementById('table-cols').value),
        width: parseInt(document.getElementById('table-width').value),
        borderWidth: parseInt(document.getElementById('border-width').value),
        borderColor: document.getElementById('border-color').value,
        borderStyle: document.getElementById('border-style').value,
        alignment: document.getElementById('table-alignment').value,
    };
}
function generateTableHTML(data) {
    let table = `<table cellspacing="0" style="width: ${data.width}px; border: ${data.borderWidth}px ${data.borderStyle} ${data.borderColor}; margin:${data.alignment === "center" ? "0 auto" : data.alignment === "left" ? "0" : "0 0 0 auto"};">`;
    if (data.title) {table += `<caption>${data.title}</caption>`;}
    for (let r = 0; r < data.rows; r++) {table += '<tr>';
	for (let c = 0; c < data.cols; c++) {table += `<td style="border: 1px solid black">&nbsp;</td>`;}table += '</tr>';}
    table += '</table>';
    return table;
}
//Tablo Oluştur Son//


//Tablo Güncelleme Baş//
function getDataFromTable(table) {
	document.getElementById('edit-table-title').value = table.querySelector('caption') ? table.querySelector('caption').innerText : '';
	document.getElementById('edit-table-rows').value = table.rows.length;
	document.getElementById('edit-table-cols').value = table.rows[0] ? table.rows[0].cells.length : 0;
	document.getElementById('edit-table-alignment').value = table.style.margin === '0px' ? 'left' : table.style.margin === '0px auto' ? 'center' : table.style.margin === '0px 0px 0px auto' ? 'right' : 'center';
	document.getElementById('edit-table-width').value = window.getComputedStyle(table).width.replace('px', '');
	document.getElementById('edit-border-width').value = parseInt(window.getComputedStyle(table).borderWidth);
	document.getElementById('edit-border-style').value = window.getComputedStyle(table).borderStyle;
	document.getElementById('edit-border-color').value = rgbToHex(window.getComputedStyle(table).borderColor);
}
function updateTable() {
    // Form değerlerini alın
    const title = document.getElementById('edit-table-title').value || "Tablo Başlığı";
    const rows = parseInt(document.getElementById('edit-table-rows').value) || 1;
    const cols = parseInt(document.getElementById('edit-table-cols').value) || 1;
    const width = parseInt(document.getElementById('edit-table-width').value) || 500;
    const borderWidth = parseInt(document.getElementById('edit-border-width').value) || 1;
    const borderColor = document.getElementById('edit-border-color').value || "black";
    const borderStyle = document.getElementById('edit-border-style').value || "solid";
    const alignment = document.getElementById('edit-table-alignment').value || "center";
    selectedTable.style.width = `${width}px`;
    selectedTable.style.border = `${borderWidth}px ${borderStyle} ${borderColor}`;
    selectedTable.style.margin = alignment === "center" ? "0 auto" : alignment === "left" ? "0" : "0 0 0 auto";
    let caption = selectedTable.querySelector('caption');
    if (caption) {caption.innerText = title;} else {selectedTable.insertAdjacentHTML('afterbegin', `<caption>${title}</caption>`);}
    while (selectedTable.rows.length < rows) {const row = selectedTable.insertRow();for (let i = 0; i < cols; i++) {const cell = row.insertCell();cell.innerHTML = "&nbsp;";cell.style = 'border: 1px solid black';}}
    while (selectedTable.rows.length > rows) {selectedTable.deleteRow(selectedTable.rows.length - 1);}
    for (let row of selectedTable.rows) {while (row.cells.length < cols) {const cell = row.insertCell();cell.innerHTML = "&nbsp;";cell.style = 'border: 1px solid black';}while (row.cells.length > cols) {row.deleteCell(row.cells.length - 1);}}
    closeModal();
}
//Tablo Güncelle Son//


//Hücre Biçimlendirme Baş
function getDataFromCell() {
    const selectedCells = document.querySelectorAll('.selectedcell');
    const selectedCell = selectedCells[0]; // Eğer bir hücre seçildiyse, ilkini alıyoruz.

    if (selectedCells.length === 1) {
        document.getElementById('edit-cell-content').value = selectedCell.innerHTML;document.getElementById('edit-cell-content').disabled = false;
    }else{
		document.getElementById('edit-cell-content').value = '##Çoklu Şeçim##';document.getElementById('edit-cell-content').disabled = true;
	}
	const style = selectedCell.getAttribute('style') || '';
	const bgColorMatch = style.match(/(?:^|;)\s*background-color:\s*([^;]+)/);document.getElementById('edit-cell-bg-color').value = bgColorMatch ? rgbToHex(bgColorMatch[1]) : '#FFFFFF';
	const textColorMatch = style.match(/(?:^|;)\s*color:\s*([^;]+)/);document.getElementById('edit-cell-text-color').value = textColorMatch ? rgbToHex(textColorMatch[1]) : '#000000';
	const fontSizeMatch = style.match(/(?:^|;)\s*font-size:\s*([^;]+)/);document.getElementById('edit-cell-font-size').value = fontSizeMatch ? parseInt(fontSizeMatch[1]) : 14;
	const borderWidthMatch = style.match(/(?:^|;)\s*border-width:\s*([^;]+)/);document.getElementById('edit-cell-border-width').value = borderWidthMatch ? parseInt(borderWidthMatch[1]) : 1;
	const borderColorMatch = style.match(/border:\s*\d+px\s+\w+\s+(rgb\([^)]+\)|#[a-fA-F0-9]{3,6});?/);document.getElementById('edit-cell-border-color').value = borderColorMatch ? rgbToHex(borderColorMatch[1]) : '#000000';
}
function updateCell() {
    const selectedCells = document.querySelectorAll('.selectedcell');
    if (selectedCells.length > 0) {
        selectedCells.forEach(selectedCell => {
            if (selectedCells.length === 1) {selectedCell.innerHTML = document.getElementById('edit-cell-content').value;}
			
            selectedCell.style.backgroundColor = document.getElementById('edit-cell-bg-color').value;
            selectedCell.style.color = document.getElementById('edit-cell-text-color').value;
            selectedCell.style.fontSize = `${document.getElementById('edit-cell-font-size').value}px`;
            selectedCell.style.borderWidth = `${document.getElementById('edit-cell-border-width').value}px`;
            selectedCell.style.borderColor = hexToRgb(document.getElementById('edit-cell-border-color').value);
			selectedCell.classList.remove('selectedcell');
        });
        closeModal();
    }
}

// Yeni satır ekleme fonksiyonu (Yukarıya)
function addRowUp() {
    const selectedCells = document.querySelectorAll('.selectedcell');
    
    if (selectedCells.length > 0) {
        // Çoklu hücre seçimlerinde, en üstteki hücreyi baz alıyoruz
        const topMostCell = getTopMostCell(selectedCells);
        const selectedRow = topMostCell.parentElement;

        const newRow = selectedRow.cloneNode(false); // Yeni bir satır oluşturuyoruz (içeriksiz)
        selectedRow.parentElement.insertBefore(newRow, selectedRow); // Yeni satırı yukarıya ekliyoruz

        // Yeni satırdaki hücre sayısını mevcut satırın hücre sayısına göre ayarlıyoruz
        const cellCount = selectedRow.children.length;
        for (let i = 0; i < cellCount; i++) {
            const newCell = document.createElement('td');
            newCell.style = 'border: 1px solid black'; // Varsayılan stil
            newCell.innerHTML = '&nbsp;'; // Hücreye boşluk karakteri ekliyoruz
            newRow.appendChild(newCell); // Yeni hücreyi ekliyoruz
        }

        // Yeni satırdaki hücrelere select class'ı eklemiyoruz
        newRow.querySelectorAll('td').forEach(cell => {
            cell.classList.remove('selectedcell');  // Seçili sınıfı kaldırıyoruz
        });
    }
}

// Yeni satır ekleme fonksiyonu (Aşağıya)
function addRowDown() {
    const selectedCells = document.querySelectorAll('.selectedcell');
    
    if (selectedCells.length > 0) {
        // Çoklu hücre seçimlerinde, en alttaki hücreyi baz alıyoruz
        const bottomMostCell = getBottomMostCell(selectedCells);
        const selectedRow = bottomMostCell.parentElement;

        const newRow = selectedRow.cloneNode(false); // Yeni bir satır oluşturuyoruz (içeriksiz)
        selectedRow.parentElement.insertBefore(newRow, selectedRow.nextSibling); // Yeni satırı aşağıya ekliyoruz

        // Yeni satırdaki hücre sayısını mevcut satırın hücre sayısına göre ayarlıyoruz
        const cellCount = selectedRow.children.length;
        for (let i = 0; i < cellCount; i++) {
            const newCell = document.createElement('td');
            newCell.style = 'border: 1px solid black'; // Varsayılan stil
            newCell.innerHTML = '&nbsp;'; // Hücreye boşluk karakteri ekliyoruz
            newRow.appendChild(newCell); // Yeni hücreyi ekliyoruz
        }

        // Yeni satırdaki hücrelere select class'ı eklemiyoruz
        newRow.querySelectorAll('td').forEach(cell => {
            cell.classList.remove('selectedcell');  // Seçili sınıfı kaldırıyoruz
        });
    }
}

// Yeni sütun ekleme fonksiyonu (Sola)
function addColumnLeft() {
    const selectedCells = document.querySelectorAll('.selectedcell');
    
    if (selectedCells.length > 0) {
        // Çoklu hücre seçimlerinde, en soldaki hücreyi baz alıyoruz
        const leftMostCell = getLeftMostCell(selectedCells);
        const columnIndex = Array.from(leftMostCell.parentElement.children).indexOf(leftMostCell);
        
        const rows = leftMostCell.parentElement.parentElement.children;
        Array.from(rows).forEach(row => {
            const newCell = row.insertBefore(document.createElement('td'), row.children[columnIndex]); // Yeni hücreyi sol tarafa ekliyoruz
            newCell.style = 'border: 1px solid black'; // Varsayılan stil
            newCell.innerHTML = '&nbsp;'; // Hücreye boşluk karakteri ekliyoruz
            newCell.classList.remove('selectedcell');  // Seçili sınıfı kaldırıyoruz
        });
    }
}

// Yeni sütun ekleme fonksiyonu (Sağa)
function addColumnRight() {
    const selectedCells = document.querySelectorAll('.selectedcell');
    
    if (selectedCells.length > 0) {
        // Çoklu hücre seçimlerinde, en sağdaki hücreyi baz alıyoruz
        const rightMostCell = getRightMostCell(selectedCells);
        const columnIndex = Array.from(rightMostCell.parentElement.children).indexOf(rightMostCell);

        const rows = rightMostCell.parentElement.parentElement.children;
        Array.from(rows).forEach(row => {
            const newCell = document.createElement('td');
            row.insertBefore(newCell, row.children[columnIndex + 1]); // Yeni hücreyi sağ tarafa ekliyoruz
            newCell.style = 'border: 1px solid black'; // Varsayılan stil
            newCell.innerHTML = '&nbsp;'; // Hücreye boşluk karakteri ekliyoruz
            newCell.classList.remove('selectedcell');  // Seçili sınıfı kaldırıyoruz
        });
    }
}

// En üstteki hücreyi bulma
function getTopMostCell(selectedCells) {
    return Array.from(selectedCells).reduce((topMost, current) => {
        return current.getBoundingClientRect().top < topMost.getBoundingClientRect().top ? current : topMost;
    });
}

// En alttaki hücreyi bulma
function getBottomMostCell(selectedCells) {
    return Array.from(selectedCells).reduce((bottomMost, current) => {
        return current.getBoundingClientRect().bottom > bottomMost.getBoundingClientRect().bottom ? current : bottomMost;
    });
}

// En soldaki hücreyi bulma
function getLeftMostCell(selectedCells) {
    return Array.from(selectedCells).reduce((leftMost, current) => {
        return current.getBoundingClientRect().left < leftMost.getBoundingClientRect().left ? current : leftMost;
    });
}

// En sağdaki hücreyi bulma
function getRightMostCell(selectedCells) {
    return Array.from(selectedCells).reduce((rightMost, current) => {
        return current.getBoundingClientRect().right > rightMost.getBoundingClientRect().right ? current : rightMost;
    });
}

function deleteRow() {
    const selectedCells = document.querySelectorAll('.selectedcell');
    const processedRows = new Set();

    selectedCells.forEach(cell => {
        const row = cell.parentElement;
        if (row && !processedRows.has(row)) {
            processedRows.add(row); // Satırın daha önce işlenip işlenmediğini kontrol ediyoruz
            row.remove(); // Satırı siliyoruz
        }
    });
	 document.getElementById('tablosagtusmenu').style.display='none';
}

function deleteColumn() {
    const selectedCells = document.querySelectorAll('.selectedcell');
    const table = selectedCells[0]?.closest('table'); // Seçilen hücrelerin ait olduğu tabloyu alıyoruz
    const processedColumns = new Set();

    if (table) {
        selectedCells.forEach(cell => {
            const columnIndex = Array.from(cell.parentElement.children).indexOf(cell);
            if (columnIndex !== -1 && !processedColumns.has(columnIndex)) {
                processedColumns.add(columnIndex); // Aynı sütunun tekrar işlenmesini önlüyoruz
                Array.from(table.rows).forEach(row => {
                    const targetCell = row.children[columnIndex];
                    if (targetCell) {
                        targetCell.remove(); // Sütundaki hücreleri siliyoruz
                    }
                });
            }
        });
    }
	 document.getElementById('tablosagtusmenu').style.display='none';
}
//Hücre Biçimlendirme Son//


document.addEventListener('contextmenu', function(event) {
    const cell = event.target.closest('td, th');
    const etName = event.target.tagName;
    if (cell && (etName === 'TD' || etName === 'TH')) {
        const isCtrlPressed = event.ctrlKey;
        const isSelected = cell.classList.contains('selectedcell');
        if (isCtrlPressed && !isSelected) {
            event.preventDefault();
            selectedTable = event.target.closest('table');
            getDataFromTable(selectedTable);
            openModal('editTableModal');
        }
    }
    if (!cell || !event.ctrlKey || !cell.classList.contains('selectedcell')) return;
    event.preventDefault();  // Varsayılan sağ tıklama menüsünü engelle
    const tstMenu = document.getElementById('tablosagtusmenu');	
	const toolbarWidthPercentage = (parseFloat(window.getComputedStyle(toolbar).width) / window.innerWidth) * 100;
	const tolerance = 0.5; 
	if (Math.abs(toolbarWidthPercentage - 100) < tolerance) {
		tstMenu.style.position = 'fixed';
		tstMenu.style.top = `${event.clientY}px`;  // Y koordinatını ayarla
		tstMenu.style.left = `${event.clientX}px`; // X koordinatını ayarla
	} else {
		tstMenu.style.position = 'absolute';
		tstMenu.style.top = `${event.clientY+window.scrollY}px`;  // Y koordinatını ayarla
		tstMenu.style.left = `${event.clientX+window.scrollX}px`; // X koordinatını ayarla
	}
    tstMenu.style.display = 'flex';
});






document.addEventListener('click', function (e) {
	const quickTableMenu = document.getElementById('quick-table-menu');if (quickTableMenu && !quickTableMenu.contains(e.target)) {quickTableMenu.remove();infoDisplay.remove();}
	const tstMenu = document.getElementById('tablosagtusmenu');if (tstMenu && !tstMenu.contains(e.target)) {tstMenu.style.display='none';}
	if (e.target.tagName === 'TD') {
		if(e.ctrlKey){const cell = e.target;cell.classList.toggle('selectedcell');}
		document.querySelectorAll('table').forEach(table => {table.classList.remove('selectedtable');});
		e.target.closest('table').classList.add('selectedtable');
	}
});




function dikeyBirlestir() {
    // Seçili hücreleri al
    const selectedCells = document.querySelectorAll('.selectedcell');

    // İlk hücreyi birleştirilecek hücre olarak seç
    const firstCell = selectedCells[0];
    const cellContents = [];  // Hücre içeriklerini saklamak için
    let totalRowSpan = selectedCells.length;  // Seçilen hücre sayısı kadar rowSpan
    let totalRowSpanGreaterThanOne = 0; // RowSpan'ı 1'den büyük olan hücrelerin sayısı

    // Seçilen hücrelerin tümünü kontrol et
    selectedCells.forEach(cell => {
        // İçeriği sakla
        cellContents.push(cell.innerHTML);

        // Eğer rowSpan'ı 1'den büyükse, toplam rowSpan'ı artır
        if (cell.rowSpan > 1) {
            totalRowSpanGreaterThanOne += cell.rowSpan - 1;  // RowSpan'dan 1 çıkar çünkü zaten ilk hücreyi hesaba katıyoruz
        }

        // 'selectedcell' sınıfını kaldır
        cell.classList.remove('selectedcell');
    });

    // İlk hücreyi ayarla: rowSpan = Seçilen hücre sayısı + rowSpan'ı 1'den büyük olan hücrelerin toplamı
    firstCell.setAttribute('rowspan', totalRowSpan + totalRowSpanGreaterThanOne);
    firstCell.innerHTML = cellContents.join(' ');  // İçerikleri birleştirip ilk hücreye ekle

    // Diğer hücreleri kaldır
    selectedCells.forEach(cell => {
        if (cell !== firstCell) {
            const row = cell.parentElement;
            row.deleteCell(cell.cellIndex);  // Birleştirilen hücreyi sil
        }
    });
    // Sağ tıklama menüsünü gizle
    document.getElementById('tablosagtusmenu').style.display = 'none';
}

function yatayBirlestir() {
    // Seçili hücreleri al
    const selectedCells = document.querySelectorAll('.selectedcell');


    // İlk hücreyi birleştirilecek hücre olarak seç
    const firstCell = selectedCells[0];
    const cellContents = [];  // Hücre içeriklerini saklamak için
    let totalColSpan = selectedCells.length;  // Seçilen hücre sayısı kadar colSpan
    let totalColSpanGreaterThanOne = 0; // ColSpan'ı 1'den büyük olan hücrelerin sayısı

    // Seçilen hücrelerin tümünü kontrol et
    selectedCells.forEach(cell => {
        // İçeriği sakla
        cellContents.push(cell.innerHTML);

        // Eğer colSpan'ı 1'den büyükse, toplam colSpan'ı artır
        if (cell.colSpan > 1) {
            totalColSpanGreaterThanOne += cell.colSpan - 1;  // ColSpan'dan 1 çıkar çünkü zaten ilk hücreyi hesaba katıyoruz
        }

        // 'selectedcell' sınıfını kaldır
        cell.classList.remove('selectedcell');
    });

    // İlk hücreyi ayarla: colSpan = Seçilen hücre sayısı + colSpan'ı 1'den büyük olan hücrelerin toplamı
    firstCell.setAttribute('colspan', totalColSpan + totalColSpanGreaterThanOne);
    firstCell.innerHTML = cellContents.join(' ');  // İçerikleri birleştirip ilk hücreye ekle

    // Diğer hücreleri kaldır
    selectedCells.forEach(cell => {
        if (cell !== firstCell) {
            const row = cell.parentElement;
            row.deleteCell(cell.cellIndex);  // Birleştirilen hücreyi sil
        }
    });

    // Sağ tıklama menüsünü gizle
    document.getElementById('tablosagtusmenu').style.display = 'none';
}


function hucreBirlestir() {
    // 'selectedcell' sınıfına sahip tüm hücreleri seç
    const selectedCells = document.querySelectorAll('.selectedcell');

    // İlk hücrenin ebeveynini al
    const firstParent = selectedCells[0].parentNode;

    // Tüm hücrelerin ebeveynlerini kontrol et
    for (let i = 1; i < selectedCells.length; i++) {
        if (selectedCells[i].parentNode !== firstParent) {
			dikeyBirlestir();
        }else{
			yatayBirlestir();
		}
    }
}





function yatayBol() {
    const selectedCells = document.querySelectorAll('.selectedcell');
    const selectedTable = document.querySelector('.selectedtable'); // Tabloyu seç

    if (selectedCells.length === 0) {
        alert("Lütfen bölmek istediğiniz hücreyi seçin.");
        return;
    }

    selectedCells.forEach((cell) => {
        const row = cell.parentElement; // Hücrenin bulunduğu satır
        const colIndex = Array.from(row.children).indexOf(cell); // Hücrenin sütun indeksi
        let colSpan = parseFloat(cell.getAttribute('colspan')) || 1; // Mevcut colspan değeri

        if (colSpan > 1) {
            // Eğer colspan virgüllü ise, sadece tam kısmını al
            const intColSpan = Math.floor(colSpan); // Virgülden önceki kısmı al

            // Mevcut hücrenin colspan'ını ikiye bölelim
            const newColSpan = Math.floor(intColSpan / 2);
            const remainingColSpan = intColSpan - newColSpan;

            // Mevcut hücrenin colspan'ını güncelle
            cell.setAttribute('colspan', newColSpan);

            // Yeni hücreyi oluştur
            const newCell = document.createElement('td');
            newCell.setAttribute('colspan', remainingColSpan);
            newCell.style= "border: 1px solid black";
            newCell.innerHTML = "&nbsp;"; // Yeni hücre içeriği

            // Mevcut hücrenin hemen sağına ekle
            row.insertBefore(newCell, cell.nextSibling);
        } else {
            // Eğer colspan yoksa veya 1'se, sadece bir yeni hücre ekle
            const newCell = document.createElement('td');
            newCell.innerHTML = "&nbsp;";
            newCell.style= "border: 1px solid black";
            row.insertBefore(newCell, cell.nextSibling);

            // Diğer satırlardaki aynı sütundaki hücrelere colspan ekle
            const rows = Array.from(selectedTable.rows);
            rows.forEach((currentRow) => {
                if (currentRow !== row) {
                    const targetCell = currentRow.cells[colIndex];
                    if (targetCell) {
                        const currentColSpan = parseInt(targetCell.getAttribute('colspan')) || 1;
                        targetCell.setAttribute('colspan', currentColSpan + 1);
                    }
                }
            });
        }

        // 'selectedcell' sınıfını temizle
        cell.classList.remove('selectedcell');
    });

    // Sağ tıklama menüsünü gizle
    document.getElementById('tablosagtusmenu').style.display = 'none';
}


function dikeyBol() {
    const selectedCells = document.querySelectorAll('.selectedcell');
    const selectedTable = document.querySelector('.selectedtable'); // Tabloyu seç

    if (selectedCells.length === 0) {
        alert("Lütfen bölmek istediğiniz hücreyi seçin.");
        return;
    }

    selectedCells.forEach((cell) => {
        const row = cell.parentElement; // Hücrenin bulunduğu satır
        const colIndex = Array.from(row.children).indexOf(cell); // Hücrenin sütun indeksi
        let rowSpan = parseFloat(cell.getAttribute('rowspan')) || 1; // Mevcut rowspan değeri

        if (rowSpan > 1) {
            // Eğer rowspan virgüllü ise, sadece tam kısmını al
            const intRowSpan = Math.floor(rowSpan); // Virgülden önceki kısmı al

            // Mevcut hücrenin rowspan'ını ikiye bölelim
            const newRowSpan = Math.floor(intRowSpan / 2);
            const remainingRowSpan = intRowSpan - newRowSpan;

            // Mevcut hücrenin rowspan'ını güncelle
            cell.setAttribute('rowspan', newRowSpan);

            // Yeni hücreyi oluştur
            const newCell = document.createElement('td');
            newCell.setAttribute('rowspan', remainingRowSpan);
            newCell.style = "border: 1px solid black";
            newCell.innerHTML = "&nbsp;"; // Yeni hücre içeriği

            // Yeni hücreyi, mevcut hücrenin hemen altına ekle
            let nextRow = row;
            for (let i = 0; i < newRowSpan; i++) {
                nextRow = nextRow.nextElementSibling;
                if (!nextRow) {
                    // Eğer satır yoksa, yeni bir satır ekleyelim
                    nextRow = document.createElement('tr');
                    row.parentElement.appendChild(nextRow);
                }
                nextRow.insertBefore(newCell.cloneNode(true), nextRow.children[colIndex]);
            }
        } else {
            // Eğer rowspan yoksa veya 1'se, sadece bir yeni hücre ekle
            const newCell = document.createElement('td');
            newCell.innerHTML = "&nbsp;";
            newCell.style = "border: 1px solid black";
            row.insertBefore(newCell, cell.nextSibling);

            // Diğer satırlardaki aynı sütundaki hücrelere rowspan ekle
            const rows = Array.from(selectedTable.rows);
            rows.forEach((currentRow) => {
                if (currentRow !== row) {
                    const targetCell = currentRow.cells[colIndex];
                    if (targetCell) {
                        const currentRowSpan = parseInt(targetCell.getAttribute('rowspan')) || 1;
                        targetCell.setAttribute('rowspan', currentRowSpan + 1);
                    }
                }
            });
        }

        // 'selectedcell' sınıfını temizle
        cell.classList.remove('selectedcell');
    });

    // Sağ tıklama menüsünü gizle
    document.getElementById('tablosagtusmenu').style.display = 'none';
}




