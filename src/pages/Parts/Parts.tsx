import "./Parts.scss"
import CATEGORIES from "../../data/CATEGORIES.json"
import { Category } from "../../layouts/MainLayouts/components/ProductNavigation/components/Category/Category"
import { usePageTitle } from "../../shared/hooks/usePageTitle"
import { PARTS_PAGE_TITLE } from "../../shared/constants/Page.constants"
import { FC, memo, useEffect } from "react"
import { ICategories } from "./model/ICategories.model"
import { Breadcrumbs } from "../../layouts/MainLayouts/components/ProductNavigation/components/Breadcrumb/Breadcrumbs"
import { SideBar } from "../../layouts/MainLayouts/components/SideBar/SideBar"
import { useStore } from "../../store/context"

export const Parts: FC = memo(() => {
  const { products } = useStore()

  usePageTitle(PARTS_PAGE_TITLE)

  useEffect(() => {
    products.load()
  }, [])

  return (
    <div className="container content-wrapper flex-row">
      <SideBar />
      <div className="content">
        <Breadcrumbs />
        <ul className="parts-table">
          {CATEGORIES.map((data: ICategories) => (
            <Category
              id={data.id}
              category={data.category}
              title={data.title}
              key={data.id}
            />
          ))}
        </ul>
      </div>
    </div>
  )
})
