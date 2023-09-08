export default {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	transform: {
		"^.+\\.tsx?$": "ts-jest"
		// process `*.tsx` files with `ts-jest`
	},
	setupFilesAfterEnv: [
		'<rootDir>/setupTests.ts'
	],
	moduleNameMapper: {
		'\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
		'\\.(css|less|sass|scss)$': 'identity-obj-proxy'
	}
};
