const createPageAddMdContext = require('./create-page-add-md-context')
const createTestcasesOfRules = require('./create-testcases-of-rules')
const createGlossaryUsagesInRules = require('./create-glossary-uages-in-rules')

const createPages = async options => {
	const promises = [
		/**
		 * Enhance markdown pages with more context
		 * -> get all data necessary from `on-create-node` callback
		 * -> extend `context` object on `markdown` pages
		 */
		createPageAddMdContext(options),

		/**
		 * Create test case files of all rules
		 * -> create test cases files into `./public/testcases/`
		 * -> copy `./test-assets/*` into `./public`
		 * -> create `testcases.json` into `./public`
		 */
		createTestcasesOfRules(options),

		/**
		 * Create glossary usages
		 * -> for each glossary item (find references in each rule)
		 * -> this is saved in `_data` which is later used in `pages/glossary`
		 */
		createGlossaryUsagesInRules(options),
	]

	await Promise.all(promises)
}

module.exports = createPages
