<template>
    <h2>A6 Two Way Bindings to Multiple Input boxes Component</h2>

    <div class="checkbox-container">
        <h2 class="h2-sports">Select your favorite Sports</h2>
        <div class="checkbox-row">
            <label class="checkbox-label">
                <input type="checkbox" value="Cricket" v-model="sports" />
                <span class="checkbox-text">Cricket</span>
            </label>

            <label class="checkbox-label">
                <input type="checkbox" value="Football" v-model="sports" />
                <span class="checkbox-text">Football</span>
            </label>

            <label class="checkbox-label">
                <input type="checkbox" value="Hockey" v-model="sports" />
                <span class="checkbox-text">Hockey</span>
            </label>
        </div>
    </div>

    <div class="checkbox-container">
        <h2 class="h2-player">Select your favorite Player</h2>

        <div class="radio-row">
            <label class="radio-label">
                <input type="radio" value="Smith" v-model="player" name="player" />
                <span class="radio-text">Smith</span>
            </label>

            <label class="radio-label">
                <input type="radio" value="Finch" v-model="player" name="player" />
                <span class="radio-text">Finch</span>
            </label>
        </div>
    </div>

    <div>
        <h3>Selected Sports: {{ sports }}</h3>
        <h3>Selected Player: {{ player }}</h3>
    </div>
</template>
  
<script>
export default {
    name: "A6TwoWayBindingsMultiple",
    data: function () {
        return {
            sports: [],
            player: "",
        };
    },
};
</script>
  
<style scoped>
h3 {
    color: #a5a803;
}

.h2-sports {
    color: #007bff;
}

.h2-player {
    color: #007bff;
}

/* Add styles for the checkbox container */
.checkbox-container {
    background-color: #f0f0f0;
    /* Add a background color */
    border-radius: 10px;
    /* Add rounded corners */
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    /* Add a box shadow */
    padding: 20px;
    /* Add padding for center alignment */
    text-align: center;
    /* Center align the contents */
    margin-bottom: 10px;
    width: 36%;
}

/* Style for the row of checkboxes and radio buttons */
.checkbox-row,
.radio-row {
    display: flex;
    justify-content: center;
    gap: 20px;
    /* Add spacing between inputs */
}

/* Style for individual checkbox and radio labels */
.checkbox-label,
.radio-label {
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
}

/* Style the checkbox and radio input elements */
.checkbox-label input[type="checkbox"],
.radio-label input[type="radio"] {
    margin-right: 5px;
    /* Add spacing between label and input */
    transform: scale(1.2);
    /* Increase the input size */
}

/* Style for the checkbox and radio text */
.checkbox-text,
.radio-text {
    color: #007bff;
    /* Text color for the labels */
}

/* Customize checkbox and radio appearance when checked */
.checkbox-label input[type="checkbox"]:checked+.checkbox-text,
.radio-label input[type="radio"]:checked+.radio-text {
    color: #4caf50;
    /* Change text color when checked */
}
</style>
  