const storagePrefix = 'argumentative-writing-workshop';

function readStoredValue(key) {
	try {
		return localStorage.getItem(`${storagePrefix}:${key}`);
	} catch {
		return null;
	}
}

function storeValue(key, value) {
	try {
		localStorage.setItem(`${storagePrefix}:${key}`, value);
	} catch {
		// The exercise still works when local storage is unavailable.
	}
}

document.querySelectorAll('[data-quiz]').forEach((quiz) => {
	quiz.addEventListener('submit', (event) => {
		event.preventDefault();

		const questions = [...quiz.querySelectorAll('[data-question]')];
		let answered = 0;
		let correct = 0;

		questions.forEach((question) => {
			const choice = question.querySelector('input:checked');
			const feedback = question.querySelector('[data-question-feedback]');

			if (!choice) {
				feedback.textContent = 'Choose an answer before checking.';
				feedback.dataset.state = 'incorrect';
				return;
			}

			answered += 1;
			const isCorrect = choice.dataset.correct === 'true';

			if (isCorrect) {
				correct += 1;
				feedback.textContent = question.dataset.correctFeedback;
				feedback.dataset.state = 'correct';
			} else {
				feedback.textContent = question.dataset.incorrectFeedback;
				feedback.dataset.state = 'incorrect';
			}
		});

		const result = quiz.querySelector('[data-quiz-result]');
		result.textContent =
			answered === questions.length
				? `${correct} of ${questions.length} correct. ${
						correct === questions.length
							? 'Move on to the writing exercise.'
							: 'Use the feedback, then try again.'
					}`
				: `Answer all ${questions.length} questions before moving on.`;
	});
});

document.querySelectorAll('textarea[data-storage-key]').forEach((textarea) => {
	const key = textarea.dataset.storageKey;
	const counter = document.querySelector(`[data-word-count-for="${textarea.id}"]`);
	const storedValue = readStoredValue(key);

	if (storedValue) {
		textarea.value = storedValue;
	}

	const update = () => {
		const words = textarea.value.trim() ? textarea.value.trim().split(/\s+/).length : 0;
		counter.textContent = `${words} word${words === 1 ? '' : 's'}`;
		storeValue(key, textarea.value);
	};

	textarea.addEventListener('input', update);
	update();
});

document.querySelectorAll('[data-copy-target]').forEach((button) => {
	button.addEventListener('click', async () => {
		const target = document.querySelector(button.dataset.copyTarget);
		const originalLabel = button.textContent;

		try {
			await navigator.clipboard.writeText(target.value);
		} catch {
			target.select();
			document.execCommand('copy');
		}

		button.textContent = 'Copied';
		setTimeout(() => {
			button.textContent = originalLabel;
		}, 1400);
	});
});
