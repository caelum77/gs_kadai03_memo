const savedMemos = localStorage.getItem("memos");
const memos = JSON.parse(savedMemos) || [];
let selectedMemoIndex = -1;

function showMemos(pastedIndex = -1) {
    $(".main-panel").empty();
    
    for (let i = 0; i < memos.length; i++) {
        const pasteClass = i === pastedIndex ? " memo-card--pasted" : "";
        const selectedClass = i === selectedMemoIndex ? " memo-card--selected" : "";
        const $memoCard = $("<div>")
            .addClass(`memo-card${pasteClass}${selectedClass}`)
            .attr("data-index", i)
            .text(memos[i]);

        $(".main-panel").append($memoCard);
    }
}

showMemos();

$("#write").on("click", function(){
    const text = $("#text-field").val();
    memos.push(text);
    selectedMemoIndex = -1;
    localStorage.setItem("memos", JSON.stringify(memos));
    showMemos(memos.length - 1);
    $("#text-field").val("");
});

$(".main-panel").on("click", ".memo-card", function(){
    selectedMemoIndex = Number($(this).attr("data-index"));
    $("#text-field").val(memos[selectedMemoIndex]);
    showMemos();
});

$("#rewrite").on("click", function(){
    if (selectedMemoIndex === -1) {
        return;
    }

    memos[selectedMemoIndex] = $("#text-field").val();
    localStorage.setItem("memos", JSON.stringify(memos));
    showMemos(selectedMemoIndex);
});

$("#delete-one").on("click", function(){
    if (selectedMemoIndex === -1) {
        return;
    }

    const deleteIndex = selectedMemoIndex;
    $(".memo-card").eq(deleteIndex).addClass("memo-card--falling");

    setTimeout(function(){
        memos.splice(deleteIndex, 1);
        selectedMemoIndex = -1;

        if (memos.length === 0) {
            localStorage.removeItem("memos");
        } else {
            localStorage.setItem("memos", JSON.stringify(memos));
        }

        showMemos();
        $("#text-field").val("");
    }, 650);
});

$("#delete").on("click", function(){
    $(".memo-card").addClass("memo-card--falling");

    setTimeout(function(){
        localStorage.removeItem("memos");
        memos.length = 0;
        selectedMemoIndex = -1;
        showMemos();
        $("#text-field").val("");
    }, 650);
});
