# State Lifecycle

## Lists

### Search

| Variable | Owner | Engine Init | Game Init | Search Init | Node Init | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| eval | Engine | v | | | | |
| TT Object | Engine | v | | | | |
| TT init | | | v | | | There is a better TT initializtion, TODO in the future |
| KillerMove | Search | | v | | | |
| HistoryHeuristic | Search | | v | | | |
| SearchContext | Search | | | v | | The collection of search initializations |
| SearchStats | SearchContext | | | v | | |
| SearchLimit | SearchContext | | | v | | |
| SearchWorker | Search | | | v | | The collection of the main search variables |
| undoState | SearchWorker | | | v | | |
| moveBuffer | SearchWorker | | | v | | |
