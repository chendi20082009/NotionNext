import CategoryGroup from './CategoryGroup'
import InfoCard from './InfoCard'
import TagGroups from './TagGroups'
import { useGlobal } from '@/lib/global'
import { faAngleDoubleRight, faTag, faThList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

/**
 * 侧边栏
 * @param tags
 * @param currentTag
 * @param post
 * @param posts
 * @param categories
 * @param currentCategory
 * @returns {JSX.Element}
 * @constructor
 */
const SideBar = ({ tags, currentTag, post, slot, categories, currentCategory }) => {
  const { locale } = useGlobal()
  return <aside id='sidebar' className='bg-white dark:bg-gray-900 w-80 z-10 dark:border-gray-500 border-gray-200 scroll-hidden h-full'>

    <div className={(!post ? 'sticky top-0' : '') + ' bg-white dark:bg-gray-900 pb-4'}>

      <section className='py-5'>
        <InfoCard />
      </section>

      {/* 分类  */}
      {categories && (
        <section className='mt-8'>
          <div className='text-sm px-5 flex flex-nowrap justify-between font-light'>
            <div className='text-gray-600 dark:text-gray-200'><FontAwesomeIcon icon={faThList} className='mr-2' />{locale.COMMON.CATEGORY}</div>
            <Link href={'/category'} passHref>
              <a className='mb-3 text-gray-400 hover:text-black dark:text-gray-400 dark:hover:text-white hover:underline cursor-pointer'>
                {locale.COMMON.MORE} <FontAwesomeIcon icon={faAngleDoubleRight} />
              </a>
            </Link>
          </div>
          <CategoryGroup currentCategory={currentCategory} categories={categories} />
        </section>
      )}

      {/* 标签云  */}
      {tags && (
        <section className='mt-4'>
          <div className='text-sm py-2 px-5 flex flex-nowrap justify-between font-light dark:text-gray-200'>
            <div className='text-gray-600 dark:text-gray-200'><FontAwesomeIcon icon={faTag} className='mr-2'/>{locale.COMMON.TAGS}</div>
            <Link href={'/tag'} passHref>
              <a className='text-gray-400 hover:text-black  dark:hover:text-white hover:underline cursor-pointer'>
                {locale.COMMON.MORE} <FontAwesomeIcon icon={faAngleDoubleRight} />
              </a>
            </Link>
          </div>
          <div className='px-5 py-2'>
            <TagGroups tags={tags} currentTag={currentTag} />
          </div>
        </section>
      )}

      {slot}

    </div>

    <section className='bg-white dark:bg-gray-900'>
      {/* 信息流广告 */}
      <ins className="adsbygoogle"
      style={{ display: 'block' }}
      data-adtest="on"
      data-ad-format="fluid"
      data-ad-layout-key="-5j+cz+30-f7+bf"
      data-ad-client="ca-pub-2708419466378217"
      data-ad-slot="1510444138"/>
    </section>

  </aside>
}
export default SideBar
